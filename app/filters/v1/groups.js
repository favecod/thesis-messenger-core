const userFilter = require('./users')

const show = group => {
    return {
        id: group.id,
        name: group.name,
        groupname: group.groupname,
        createdAt: group.createdAt,
    }
}

const showAll = users => {
    let result = []
    users.map(item => {
        result.push(show(item))
    })
    return result
}

const usersGroups = items => {
    let user = items.user[0]
    let group = items.group[0]
    return {
        user,
        group
    }
}

const showUsers = items => {
    let result = []
    items.map(item => {
        result.push(userFilter.show(item.user[0]))
    })
    return result
}

const showGroupsForUser = ({joined, notJoined}) => {
    return {
        joined,notJoined
    }
}


module.exports = {
    show,
    showAll,
    usersGroups,
    showUsers,
    showGroupsForUser
}