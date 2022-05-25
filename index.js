//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

const contacts = require(`./data/contacts`)

const listOfMeetings = require("./data/meetings")
//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())



app.get("/contacts", (req,res) =>{
    
    res.json({contacts:contacts})
})

app.get("/contacts/:id", (req,res) =>{
    // 1.extract id from the path
    console.log("params", req.params)
    const contact = contacts.find(item => item.id === req.params.id)
    //2.search the contacts array
    //3. find the contact and then return it
    res.json({contact})
})

app.get("/contacts/:id/meetings", (req,res )=> {
    
    const meetings = listOfMeetings.filter(item => item.contactId === req.params.id)

    res.json({meetings})
})

//Start up our server
const port = 3030
app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})


