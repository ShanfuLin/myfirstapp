// Import packages 
const express = require('express')
const morgan = require ('morgan')

// Configure out port 
//Check if it is set in the environment variable, if not then we default to 3000
// use process.env.Port ... if not 3000
const port = process.env.Port || 3000

// Create an instance of express application
const app = express()

// Log all request
app.use(morgan('common'))

// GET/
app.get(`/`, (req, resp) => {
    // what is the media type
    resp.type('text/html')
    resp.status(200)
    resp.send(`<h1> The current time is ${new Date()} </h1> <img src= "/static/645.jpg"> This is a modified line! </h2> <h2> This is a modified line! </h2>`)
})

//Serve static resource

app.use("/static", express.static(__dirname+ "/static"))

//Start our web application
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})

