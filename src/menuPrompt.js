const question = require('./question')
module.exports = async (category = {}) => {

    const exit = await question('Pense em um prato que gosta (pressione enter para continuar ou digite "sair" para sair ): ')
    if (exit == 'sair' && !console.log('Json da execução: ', JSON.stringify(category)))
        process.exit()
}