const { compareSync } = require('bcryptjs')
const { comparepaswd, hashPasswd } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User } = require('../models')

module.exports = class Controller {
    static async register(req, res, next) {
        try {
            const { username, email, password } = req.body

            await User.create({ username, email, password })

            res.status(201).json({
                username,
                email
            })
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            // console.log(req.body)
            const { email, password } = req.body

            if (!email) throw { status: 400, message: 'Email is required' }
            if (!password) throw { status: 400, message: 'Password is required' }

            let user = await User.findOne({
                where: {
                    email
                }
            })
            // console.log(user)
            if (!user || !compareSync(password, user.password)) {
                throw { status: 401, message: 'Invalid email or password' }
            }

            let token = signToken({
                id: user.id
            })
            // console.log(token)
            res.status(200).json({ access_token: token })
        } catch (error) {
            // console.log(error)
            next(error)
        }
    }
}