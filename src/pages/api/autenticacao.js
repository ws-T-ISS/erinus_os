import nc from 'next-connect'
import {compare} from 'bcrypt'
import Operador from '../../database/models/operador'
const handler = nc({
    onError: (err, req, res, next) => {
        res.status(500).end("Houve um erro! " + err.toString())
    },
    onNoMatch: (req, res) => {
        res.status(404).json({mensagem: "Método de requisição não implementado.", erro: true});
    },
})

handler.post(async (req, res) => {
    const {usuario, senha} = req.body
    if(!usuario || !senha){
        res.status(200).json({mensagem: "Está faltando dados em sua requisição.", erro: true})
        return
    }
    const query_find_operator = await Operador.findOne({where: {usuario: usuario}})
    if(query_find_operator === null){
        res.status(200).json({mensagem: "Usuário ou senha incorretos", erro: true})
        return
    } 
    const match_password = await compare(senha, query_find_operator.senha)
    if (match_password){
        res.status(201).json({mensagem: "Encontrado", usuario: {...query_find_operator.dataValues, senha: undefined}})
    }else{
        res.status(200).json({mensagem: "Usuário ou senha incorretos", erro: true})
    }
})

export default handler