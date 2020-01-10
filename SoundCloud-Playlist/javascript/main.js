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

SoundCloudAPI.renderTracks = function() {
    //create 'card' div
    var card = document.createElement('div');
    card.classList.add("card");
    document.querySelector('.js-search-results').appendChild(card);

    //create 'image' div
    var image_div = document.createElement('div');
    image_div.classList.add("image");

    var image_img = document.createElement('img');
    image_img.classList.add("image_img");
    image_img.src = "http://www.placekitten.com/290/290";
    image_div.appendChild(image_img);

    //create 'content' div
    var content = document.createElement('div');
    content.classList.add("content");

    var header = document.createElement('div');
    header.classList.add("header");
    header.innerHTML = '<a href="#" target=\"_blank\">\"Science Vs. Romance\"</a>';
    content.appendChild(header);

    //create button
    var button = document.createElement('div');
    button.classList.add("ui", "bottom", "attached", "button", "js-button");

    var icon = document.createElement('i');
    icon.classList.add("add", "icon");
    button.appendChild(icon);
    
    var buttonText = document.createElement('span');
    buttonText.innerHTML = "Add to playlist";

    //append to card
    card.appendChild(image_div);
    card.appendChild(content);
    card.appendChild(button);
}


SoundCloudAPI.init();
SoundCloudAPI.renderTracks();
/* 3. Display the cards*/
 

/* 4. Add to playlist and play*/

