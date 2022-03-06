import jwt from 'jsonwebtoken'
import {v4 as uuid} from 'uuid'
require("dotenv").config()
const SECRET = process.env.TK_SECRET

export const CreateToken = (payload) => {
    const token = jwt.sign({...payload, randomHash: uuid()}, SECRET, {expiresIn: '3h'})
    return token
}

export const VerifyToken = (token) => {
    try{
        jwt.verify(token, SECRET)
        return true
    }catch{
        return false
    }
}