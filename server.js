const mongoose = require('mongoose');
const path = require('path');
const express = require('express');
const app = express();

const teamRouter = require("./routes/teamRouter.js");
const matchRouter = require("./routes/matchRouter.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use('/match', matchRouter);
app.use('/team', teamRouter);

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

mongoose.connect("mongodb+srv://root:root@cluster0.ov6bp.mongodb.net/schedule?retryWrites=true&w=majority", { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

