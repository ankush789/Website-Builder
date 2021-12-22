const express =  require('express');
const path = require("path");
const bodyParser = require('body-parser');
const cors = require('cors');

// Setting Express
const app = express();
const port = (process.env.PORT || 3000);

// //GZIP static files
// app.use(compression());

//CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

//Set Static Folder
app.use(express.static(path.join(__dirname, "client")));

// //Index Route
// const api = require('./routes/index');
// app.use('/api', api);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(port, ()=>{
    console.log('Server is started at port : ' + port);
});
