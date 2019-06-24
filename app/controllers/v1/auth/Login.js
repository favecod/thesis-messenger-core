const Controller = require(`${config.path.controllers}`)
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

class Login extends Controller {
    async handle(args) {
        try {
            const { Users } = this.model
            const user = await Users.findOne({ username: args.username }) 
                if (!user || !bcrypt.compareSync(args.password, user.password)) {
                    return new Error('Username or Password is wrong')
                }

                const token = jwt.sign({
                    id: user.id,
                    username: args.username
                }, config.jwt.secretKey, config.jwt.options)
                
                const result = {
                    token,
                    user: {
                        id: user.id,
                        username: user.username,
                        fullname: user.fullname
                    }
                } 

                return result
        } catch (err) {
            return new Error(err)
        }
    }
}

module.exports = new Login