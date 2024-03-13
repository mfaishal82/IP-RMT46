const { Content, Tag, ContentTag } = require('../models')

module.exports = class Controller{
    static async getContent(req, res, next){
        try {
            let content = await Content.findAll({
                include: [{
                    model: Tag,
                    through: ContentTag
                }]
            })

            res.status(200).json(content)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}