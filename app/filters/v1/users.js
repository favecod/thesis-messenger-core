const show = user => {
    return {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        createdAt: user.createdAt,
    }
}

const showAll = users => {
    let result = []
    users.map(item => {
        result.push(show(item))
    })
    return result
}

module.exports = {
    show,
    showAll,
}