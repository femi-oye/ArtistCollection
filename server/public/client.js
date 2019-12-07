$(document).ready(readyNow);

function readyNow() {
    console.log('JQ loaded');

    $ ('#submitBtn').on('click', getArtistDetails);

    displayArtists();
}

// function to check that fields are not blank
function getArtistDetails() {
    if ($('#artistIn').val() == "" || $('#songIn').val() == "" || $('#yearIn').val() == ""){
        alert("Fields cannot be empty");
    }
    else{
        addArtistDetails($('#artistIn').val(), $('#songIn').val(), $('#yearIn').val());
        ($('#artistIn').val("")), $('#songIn').val(""), $('#yearIn').val("");
    }
}

// function to grab user input
function addArtistDetails() {
    const artistsIn = {
        name: $('#artistIn').val(),
        song: $('#songIn').val(),
        year: $('#yearIn').val()
    };
//    checkUserFields();
    console.log(`Items in is ${JSON.stringify(artistsIn)}`);
    
    $.ajax({
        method: 'POST',
        url: '/artist-songs',
        data: artistsIn
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

    displayArtists();
    $('#artistIn').val("");
    $('#songIn').val("");
    $('#yearIn').val("");
}

function displayArtists() {

    $.ajax({
        method: 'GET',
        url: '/artist-songs'
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