const express = require('express')
const axios = require('axios')
const Queue = require('bull')

const app = express()
const router = express.Router()
const queue = new Queue('myJob','redis://127.0.0.1:6379')
const PORT = 5000

const serverAPort = 3001;
const serverBPort = 3002;
const serverAUrl = `http://localhost:${serverAPort}`;
const serverBUrl = `http://localhost:${serverBPort}`;

router.post('/job', async (req,res) =>{
    try {
        queue.add({jobData: req.body.jobData})
        res.status(200).send({success:true, message:"Job in queue!"})
    }
    catch(err){
        res.status(200).send({success:false})
    }
})

app.listen(PORT,()=>{console.log("Server started on port 5000")}) // react starts on 3000 by default so do this.