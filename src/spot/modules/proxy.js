// Axios proxy not works in browser, manual setup
const proxy = (url, endpoint, { host, port, username, password }) => {
    const proxy = (username && password) ? `${host}:${port}/?username=${username}&password=${password}` : `${host}:${port}`
    return (typeof proxy == 'string') ? proxy + '/' + endpoint : url + endpoint
}

module.exports = proxy