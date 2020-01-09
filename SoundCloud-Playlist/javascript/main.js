/* 1. Search Soundcload*/


/* 2. Query Soundcloud API*/

var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}
SoundCloudAPI.getTrack = function(inputValue) {
    // find all sounds of q variable
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        console.log(tracks);
    });
}

/* 3. Display the cards*/


/* 4. Add to playlist and play*/
SoundCloudAPI.init();
SoundCloudAPI.getTrack("Rilo Kiley");