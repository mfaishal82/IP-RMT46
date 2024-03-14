const { Content, Category } = require('../models')

module.exports = class Controller{
    static async getContent(req, res, next){
        try {
        let content = await Content.findAll({
            include: {
                model: Category,
                // through: ContentTag
            }
        })

            res.status(200).json(content)
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async createContent(req, res, next){
        try {
            const {title, description, CategoryId} = req.body

            // console.log(title, description)

            let newContent = await Content.create({title, description, CategoryId, UserId: req.user.id})

            console.log(newContent.dataValues)
            res.status(201).json(newContent)
        } catch (error) {
            next(error)
        }
    }
}