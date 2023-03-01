const express = require('express');
const connectDB = require('./config/db')
const app = express();


// CONNECT DATABASE
connectDB()

// INITIALISE MIDDLEWARE
app.use(express.json({extended: false}))

// DEFINE ROUTES
// app.get('/', (req, res) => res.json({message:"Hello World!"})) // res.json: data to be sent in json format 
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/contacts", require("./routes/contacts"))


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port:", PORT))