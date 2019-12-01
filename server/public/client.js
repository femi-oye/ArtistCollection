$(document).ready(readyNow);

// function to grab user input
function getArtistDetails() {
    if ($('#artistIn').val() == "" || $('#songIn').val() == "" || $('#yearIn').val() == ""){
        alert("Fields cannot be empty");
    }
} // end getArtistDetails

function readyNow() {
    console.log('JQ loaded');
    $ ('#submitBtn').on('click', getArtistDetails);

    $.ajax({
        method: 'GET',
        url: '/artists'
    }).then(function(response) {
        console.log(response);

        let artists = response;

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