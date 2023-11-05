const express = require('express')
const app = express()
const PORT = 3001

const largeDatabase = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  // Add more items here
];

app.get('/',(req,res)=>{
    setTimeout(()=>{
        res.json({ data: largeDatabase });
    },3000)
    
})

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)})