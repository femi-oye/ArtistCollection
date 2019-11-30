const express = require('express');
const app = express();
const PORT = 5002;

const artists = [{name: 'John Doe', song: 'Everything', year: '2001'},
                    {name: 'Jane Doe', song: 'All I Need Is You', year: '1998'},
                    {name: 'Jack Doe', song: 'In the Beginning', year: '1984'}];

app.use(express.static('server/public'));

app.get('/artists', (req, res) => {
    res.send(artists);
    console.log(artists);
});

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});