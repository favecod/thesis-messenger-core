module.exports = {
    url: process.env.DATABASE_URL,
    options: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }
}
