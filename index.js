const main = require('./src/main')
const createCategory = require('./src/createCategory')

const initialCategory = createCategory({
    categories: [createCategory({
        name: 'massa',
        dish: 'Lasanha'
    })],
    dish: 'Bolo de Chocolate',
})

main(initialCategory)