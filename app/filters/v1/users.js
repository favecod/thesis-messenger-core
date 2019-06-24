const show = user => {
    return {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
    }
}

module.exports = {
    show,
}