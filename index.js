const express=require('express')
const cors=require('cors')
const {db} =require('./db/db')
const {readdirSync}=require('fs')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT || 3000
app.use(express.json())
app.use(cors())
readdirSync('./routes').map((route)=> app.use('/api',require('./routes/'+route)))
const server=()=>{
    db()
    app.listen(PORT,()=>{
        console.log(`You are listening to port : ${PORT}`)
    })
 
}
server()