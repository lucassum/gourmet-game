const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

module.exports = (description) => {
    return new Promise((resolve) => {
        reader.question(description, (answer) => {
            resolve(answer)
        })
    })
}