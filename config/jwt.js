module.exports = {
    secretKey: process.env.JWT_SECRET_KEY,
    options: {
        expiresIn: process.env.JWT_EXPIRE_IN,
    }
}
