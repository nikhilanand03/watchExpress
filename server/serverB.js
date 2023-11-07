const express = require('express')
const crypto = require('crypto')
const app = express()
const PORT = 3002

const largeDatabase = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  // Add more items here
];

app.get('/',async (req,res)=>{
    // setTimeout(()=>{
    //     res.json({ data: largeDatabase });
    // },3000)
  const start = Date.now();
  while (Date.now() - start < 3000) {
    let a = 1+1; // Consumes CPU cycles
  }
  res.json({ data: largeDatabase });
    
})

app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)})