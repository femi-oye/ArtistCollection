$(document).ready(readyNow);

function readyNow() {
    console.log('JQ loaded');

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