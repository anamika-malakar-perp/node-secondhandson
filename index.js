const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: false })) // to support URL-encoded bodies

app.get('/gallery', (req, res) => {
    res.send('I am on gallery');
    res.end();
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/login', (req, res) => {
    let username = req.body.name;
    let password = req.body.password;
    
    if (username === 'admin' && password === 'admin') {
        res.send('Login successful');
    }
    else {
        res.send('Login failed');
    }
})

app.listen(8000, () => {
    console.log('Your app is running on localhost 8000')
})

// https://github.com/webdevck121/RatedR
