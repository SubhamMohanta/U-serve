const express = require('express')
const app = express()

require('dotenv').config()
const cors = require('cors')

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type',
    credentials: true,
}));

app.use(express.json())

const PORT = process.env.PORT || 3001;

const connectMongoDB = require("./DataBase/ConnectMongoDB")
connectMongoDB().then(()=>{
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

app.get('/', (req, res) => {
    res.send("Welcome to U-Serve API")
})