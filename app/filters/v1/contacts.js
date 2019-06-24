const addFriend = user => {
    return {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        followersCounter: user.followersCounter,
        followingsCounter: user.followingsCounter,
    }
}

module.exports = {
    addFriend,
}