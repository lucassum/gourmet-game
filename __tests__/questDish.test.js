const questDish = require('../src/questDish')


test("questDish(_, s)",
    function (done) {
        questDish('macarrão', 's')
            .then(data => {
                expect(data).toBeTruthy()
                done()
            })
    })

test("questDish(_, n)",
    async () => {
        const data = await questDish('macarrão', 'n')
        expect(data).toBeFalsy()
    })