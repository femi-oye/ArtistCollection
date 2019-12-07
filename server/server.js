const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5002;

const artists = [{name: 'John Doe', song: 'Everything', year: '2001'},
                    {name: 'Jane Doe', song: 'All I Need Is You', year: '1998'},
                    {name: 'Jack Doe', song: 'In the Beginning', year: '1984'}];

app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static('server/public'));

app.get('/artist-songs', (req, res) => {
    res.send(artists);
    console.log(artists);
});

app.post('/artist-songs', (req, res) => {
    console.log(req.body);
    artists.push(req.body);
    res.sendStatus(201);
})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});