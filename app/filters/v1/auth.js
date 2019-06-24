const register = user => {
    return {
        id: user.id,
        fullname: user.fullname,
        username: user.username
    }
}

const login = (token, user) => {
    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            fullname: user.fullname
        }
    } 
}

module.exports = {
    register,
    login
}