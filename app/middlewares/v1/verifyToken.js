const jwt = require('jsonwebtoken')
module.exports = token => {
    return jwt.verify(token, config.jwt.secretKey, (err, decode) => {
        if(err) {
            return false
        }

        return decode
    })
}

    