class Body {
    extract(body) {
        let result = {}
        Object.entries(body).forEach(([key, value]) => {
            if (value || value === '') {
                result[key] = value
            }
        })
        return result
    }
}

module.exports = new Body