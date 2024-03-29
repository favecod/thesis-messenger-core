const show = user => {
    return {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
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