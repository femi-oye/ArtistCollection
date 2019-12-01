$(document).ready(readyNow);

function readyNow() {
    console.log('JQ loaded');

    $ ('#submitBtn').on('click', getArtistDetails);

    displayArtists();
}

// function to grab user input
function getArtistDetails() {
    const artistsIn = {
        name: $('#artistIn').val(),
        song: $('#songIn').val(),
        year: $('#yearIn').val()
    };
    console.log(`Items in is ${JSON.stringify(artistsIn)}`);
    
    $.ajax({
        method: 'POST',
        url: '/artists',
        data: artistsIn
    }).then(function(respose) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

    displayArtists();
}

function displayArtists() {

    $.ajax({
        method: 'GET',
        url: '/artists'
    }).then(function(response) {
        console.log(response);

        let artists = response;

        $('#displayArtistTable').empty();
        for (let artist of artists) {
            $('#displayArtistTable').append(`
            <tr>
                <td>${artist.name}</td>
                <td>${artist.song}</td>
                <td>${artist.year}</td>
            </tr>
            `);
        }

    });
}