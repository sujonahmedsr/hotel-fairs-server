const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


// midlleware 
app.use(cors())
app.use(express.json())





app.get('/', async (req, res)=>{
    res.send('hotel fairs api is calling okay');
})
app.listen(port, ()=>{
    console.log(`okay it's working with this port ${port}`);
})