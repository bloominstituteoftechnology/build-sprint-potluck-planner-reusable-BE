const server = require("./server.js"); 

require("dotenv").config()

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`\n *** Server is listening on port ${ PORT } *** \n`)
})