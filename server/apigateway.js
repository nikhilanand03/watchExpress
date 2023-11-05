const express = require('express')
const axios = require('axios')

const app = express()
const PORT = 5000

const serverAPort = 3001;
const serverBPort = 3002;
const serverAUrl = `http://localhost:${serverAPort}`;
const serverBUrl = `http://localhost:${serverBPort}`;

let nextServer = 'A'; // implementing a round robin strategy

app.get('/api', async (req, res) => {
  try {
    let response;

    if (nextServer === 'A') {
      response = await axios.get(`${serverAUrl}`);
      console.log("Fetched from Server A")
      nextServer = 'B';
    } else {
      response = await axios.get(`${serverBUrl}`);
      console.log("Fetched from Server B")
      nextServer = 'A';
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Server A and B' });
  }
});

app.get('/api/A', async (req, res) => {
  try {
    const response = await axios.get(`${serverAUrl}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Server A' });
  }
});

app.get('/api/B', async (req, res) => {
  try {
    const response = await axios.get(`${serverBUrl}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Server B' });
  }
});

app.listen(PORT,()=>{console.log("Server started on port 5000")}) // react starts on 3000 by default so do this.

// 'npm run dev' should be put in terminal (server directory) since in package.json dev runs "nodemon server"
// So it'll run this file.

// localhost:5000/api will return the json array!
// add this to the proxy of package.json in client folder