const { Content } = require('../models')

module.exports = class Controller{
    static async getContent(req, res, next){
        try {
            let content = await Content.findAll({
                include: {
                    model: 'Tags'
                }
            })

            res.status(200).json(content)
        } catch (error) {
            next(error)
        }
    }
}