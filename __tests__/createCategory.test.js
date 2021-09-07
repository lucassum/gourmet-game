const createCategory = require('../src/createCategory')

test("createCategory({}) should return { name: '', dish: '', categories: [] }",
    () => {
        expect(createCategory({}))
            .toEqual({ name: '', dish: '', categories: [] })
    })

test("createCategory({ name: 'massa', dish: 'lasanha' }) should return { name: 'massa', dish: 'lasanha', categories: [] }",
    () => {
        expect(createCategory({ name: 'massa', dish: 'lasanha' }))
            .toEqual({ name: 'massa', dish: 'lasanha', categories: [] })
    })

test("createCategory({ name: 'massa', dish: 'lasanha', categories: [{ name: 'apetitoso', dish: 'pizza' }] }) should return { name: 'massa', dish: 'lasanha', categories: [{ name: 'apetitoso', dish: 'pizza' }] }",
    () => {
        expect(createCategory({ name: 'massa', dish: 'lasanha', categories: [{ name: 'apetitoso', dish: 'pizza' }] }))
            .toEqual({ name: 'massa', dish: 'lasanha', categories: [{ name: 'apetitoso', dish: 'pizza' }] })

    })