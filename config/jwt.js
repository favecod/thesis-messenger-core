module.exports = {
    secretKey: process.env.JWT_SECRET_KEY,
    options: {
        expiresIn: '220h',
    }
}
