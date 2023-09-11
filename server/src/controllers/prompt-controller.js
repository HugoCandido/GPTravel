const inputPrompt = require("../models/input-prompt")
const openai = require("../config/openia")

modules.exports = {
    async sendText(req, res){
        const openaiAPI = openai. configuration()
        const inputModel = new inputPrompt(req.body)

        try{
            const response = await openaiAPI.createCompletion(
                openai.textCompletion(inputModel)
            )
            return res.status(200).json({
                sucess:true,
                data: response.data.choises[0].text
            })
        }catch(error){
            return res.status(400).json({
                sucess: false,
                error: error.response 
                ? error.response.data 
                :"There was a issue on the server"
            })
        }
    }
}