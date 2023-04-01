const VALID_KEYS_PATH = __dirname + '/valid-keys.txt'
const fs = require('fs')
module.exports = function (req, res, next) {
    const validKeys = fs.readFileSync(VALID_KEYS_PATH, 'utf8')

    if (!req.headers['x-api-key']) {
        return res.status(401).json({
            status: 401,
            message: 'Missing x-api-key '
        })
    }
    if (validKeys.indexOf(req.headers['x-api-key']) === -1) {
        return res.status(401).json({
            status: 401,
            message: 'Wrong x-api-key '
        })
    }
    next()
}
