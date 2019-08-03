const userFilter = require('./users')
const show = item => {
    return {
        id: item.id,
        text: item.text,
        userId: item.userId,
        user: userFilter.show(item.user[0]),
        groupId: item.groupId,
        attached: item.attached,
        createdAt: item.createdAt
    }
}

const showAll = items => {
    let result = []
    items.map(item => {
        result.push(show(item))
    })
    return result
}

module.exports = {
    show,
    showAll,
}