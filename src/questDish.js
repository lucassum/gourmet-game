const question = require('./question')
module.exports = async (dish, input) => {
    const answer = input || await question(`O prato que você pensou é ${dish}? (s/n) `)
    return answer.toLowerCase() != 'n'
}