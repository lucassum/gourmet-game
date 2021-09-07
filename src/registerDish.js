const question = require('./question')
const createCategory = require('./createCategory')
module.exports = async (currentCategory) => {
    const dishName = await question(`Qual prato você pensou? `)
    const categoryName = await question(`${dishName} é _____, mas ${currentCategory.dish} não. `)
    currentCategory.categories.push(
        createCategory({
            name: categoryName,
            dish: dishName,
        })
    )
}