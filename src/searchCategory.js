const question = require('./question')
module.exports = async (currentCategory) => {
    for (const category of currentCategory.categories) {
        const input = await question(`O prato que você pensou é ${category.name}? (s/n) `)
        if (input.toLowerCase() != 'n') {
            return category
        }
    }
    return false
}