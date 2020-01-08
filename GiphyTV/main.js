

/* Call Giphy API to retreive trending gifs */
function showGif(q) {
    var api_key = "i5V8e8Qa5DZB0aFda4a1D0Si1GVwANWZ"
    var url = "http://api.giphy.com/v1/gifs/trending?api_key=" + api_key;

    //AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function(event){
        var data = event.target.response;
        pushToDOM(data);
    });
}


/* Manipulate gifs */

//display gif on screen
function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src=" + src + " class=\"container-image\">"; 
    });  
}

//clear gif on screen
function clearGif() {
    document.querySelector(".js-container").innerHTML = "";
}