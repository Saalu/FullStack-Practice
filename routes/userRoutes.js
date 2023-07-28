import express from 'express'
import User from '../models/userModels.js'
import {hash,compare} from 'bcrypt'

const router = express.Router()

router
.route('/')
.get((req,res)=>{
    res.send('Welcome home router')
})
.post(async(req,res)=>{
    const {username,email,password} = req.body
    try {
    const user = await User.findOne({email})

    if(user)  res.json({msg: 'User already exist'})

    const hashedPass = await hash(password,10)
    const newUser = new User({
        username,
        email,
        password:hashedPass
    })

    const savedUser = await newUser.save()

    res.json(savedUser)
        
    } catch (err) {
        return res.status(500).json(err.message)
    }
})



export default router