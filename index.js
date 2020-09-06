const customExpress = require ('./config/custom.express')
const conexao = require ('./infraestrutura/conexao');
const Tabelas = require ('./infraestrutura/tabelas')
conexao.connect((erro) => {

    if (erro) {
        console.log (erro)
    } else {
        
        Tabelas.init (conexao)
        

        const app = customExpress ()
        app.listen(3000, () => {
            console.log ('servidor rodando na porta 3000')
        })

        console.log ('conectado com sucesso!!')
    }
})



