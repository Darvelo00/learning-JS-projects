/* 1. Search Soundcloud*/


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
        SoundCloudAPI.renderTracks(tracks);
    });
}

/* 3. Display the cards*/
SoundCloudAPI.renderTracks = function(tracks) {
    /*This function recreates the card div found on index.html*/

    tracks.forEach(function(track) {
        //recreate 'card'
        var card = document.createElement('div');
        card.classList.add("card");
        document.querySelector('.js-search-results').appendChild(card);

        //recreate 'image'
        var image_div = document.createElement('div');
        image_div.classList.add("image");

        var image_img = document.createElement('img');
        image_img.classList.add("image_img");                               //image not found png
        image_img.src = track.artwork_url || 'http://www.thebristolarms.com.au/wp-content/uploads/2018/03/img-not-found.png';
        image_div.appendChild(image_img);

        //recreate 'content
        var content = document.createElement('div');
        content.classList.add("content");

        var header = document.createElement('div');
        header.classList.add("header");
        header.innerHTML = '<a href="' + track.permalink_url + '" target="_blank">' + track.title + '</a>';
        content.appendChild(header);

        //recreate button
        var button = document.createElement('div');
        button.classList.add("ui", "bottom", "attached", "button", "js-button");

        var icon = document.createElement('i');
        icon.classList.add("add", "icon");
        button.appendChild(icon);
        
        var buttonText = document.createElement('span');
        buttonText.innerHTML = "Add to playlist";
        button.appendChild(buttonText);

        button.addEventListener('click', function() {
            SoundCloudAPI.getEmbed(track.permalink_url);
        })

        //append to card
        card.appendChild(image_div);
        card.appendChild(content);
        card.appendChild(button);
    });
}

/* 4. Add to playlist and play*/
SoundCloudAPI.getEmbed = function(track_url) {
    SC.oEmbed(track_url, {
        auto_play: true
    }).then(function(embed){
        console.log('oEmbed response: ', embed);
        var sideBar = document.querySelector('.js-playlist');
        var box = document.createElement('div');
        box.innerHTML = embed.html;
        sideBar.insertBefore(box, sideBar.firstChild);

        localStorage.setItem("key", sideBar.innerHTML);

    });
}

//load songs from previous session
var sideBar = document.querySelector('.js-playlist');
sideBar.innerHTML = localStorage.getItem("key");


SoundCloudAPI.init();
SoundCloudAPI.getTrack();