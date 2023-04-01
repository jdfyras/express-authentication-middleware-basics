const VALID_KEYS_PATH = __dirname + '/valid-keys.txt'
const fs = require('fs')
const shortid = require('shortid')
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL

module.exports = function (req, res) {
    let apiKey = genAPIKey()
    let validKey = fs.createWriteStream('valid-keys.txt', { flags: 'a' })
    validKey.write(apiKey + '\r\n')

    res.status(201).json({ apiKey })
}
const genAPIKey = () => {
    //create a base-36 string that contains 30 chars in a-z,0-9
    return [...Array(30)].map((e) => ((Math.random() * 36) | 0).toString(36)).join('')
}
