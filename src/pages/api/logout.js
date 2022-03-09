import { getCookie, removeCookies } from 'cookies-next';
import nc from 'next-connect'
import Sessao from '../../database/models/sessao';

const handler = nc({
    onError: (err, req, res, next) => {
        res.status(500).end("Houve um erro! " + err.toString())
    },
    onNoMatch: (req, res) => {
        res.status(404).json({mensagem: "Método de requisição não implementado.", erro: true});
    },
})

handler.post(async (req, res) => {
    const session_id = getCookie("erinus-S_ID", {req, res})
    const token = getCookie("erinus-S_TOKEN", {req, res})

    if(!session_id && !token){
        res.status(401).json({mensagem: "Está faltando dados de autenticação!", erro: true})
        return
    }

    const search_session = await Sessao.findByPk(session_id)
    if(!search_session){
        res.status(401).json({mensagem: "Sessão não localizada.", erro: true})
        return
    }else if(search_session.token !== token){
        res.status(401).json({mensagem: "Token não relacionado ao id de sessão.", erro: true})
        return
    }
    await Sessao.update({bloqueado: true}, {where: {codigo: session_id}})
    removeCookies("erinus-S_ID", {req, res})
    removeCookies("erinus-S_TOKEN", {req, res})
    res.status(201).json({mensagem: "Sessão finalizada com sucesso!"})
})

export default handler