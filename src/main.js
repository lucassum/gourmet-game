const menuPrompt = require('./menuPrompt')
const searchCategory = require('./searchCategory')
const questDish = require('./questDish')
const registerDish = require('./registerDish')

module.exports = async (initialCategory) => {
    await menuPrompt()
    let currentCategory = initialCategory
    let categoryFound;
    while (true) {
        categoryFound = await searchCategory(currentCategory)
        if (categoryFound)
            currentCategory = categoryFound

        if (!categoryFound) {
            const dishFound = await questDish(currentCategory.dish)
            dishFound ? console.log('Acertei de novo!') : await registerDish(currentCategory)
            currentCategory = initialCategory
            await menuPrompt(currentCategory)
        }
    }
}