const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './views/index.html'))
});

app.listen(3030, () =>{
    console.log("server andando");
})

app.use(express.static(path.join(__dirname, "../public")));