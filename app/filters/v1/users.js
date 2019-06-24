const show = user => {
    if(user) {
        return {
            id: user.id,
            fullname: user.fullname,
            username: user.username,
        }
    } else {
        return null
    }
    
}

module.exports = {
    show,
}