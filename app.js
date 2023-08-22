const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');

const port = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname, "../public")));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './src/views/home.html'))
});


app.listen(port, () =>{
    console.log("server andando");
})

