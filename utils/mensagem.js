import chalk from "chalk";

export default function mostrarMensagem(tipo, mensagem) {
    switch (tipo) {
        case 'info':
            console.log(chalk.blue('[INFO]:'), mensagem)
            break
        case 'alert':
            console.log(chalk.yellow('[ALERT]:'), mensagem)
            break
        case 'error':
            console.log(chalk.red('[ERROR]:'), mensagem)
            break
        case 'success':
            console.log(chalk.green('[SUCCESS]:'), mensagem)
            break
    }

}