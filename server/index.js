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

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

const badgeRoutes = require('./routes/badgeRoutes');
app.use('/api', badgeRoutes);

const eventRoutes = require('./routes/eventRoutes');
app.use('/api', eventRoutes);

const volunteerHoursRoutes = require('./routes/volunteerHoursRoutes');
app.use('/api', volunteerHoursRoutes);

const volunteerOpportunityRoutes = require('./routes/opportunityRoutes');
app.use('/api', volunteerOpportunityRoutes);