/*1. Grab the input value*/

//Button Event
document.querySelector(".js-go").addEventListener('click', function(){
    var input = document.querySelector("input").value;
    showGifs(input);
    clearGifs();
});

//'Enter' Key-press event
document.querySelector(".js-userinput").addEventListener('keyup', function(event){
    var input = document.querySelector("input").value;
    //look for 'enter' key being pressed
    if (event.which === 13) {
        showGifs(input); 
        clearGifs();
    } 
});

/*2. Use Giphy API */
function showGifs(input) {
    var key = "i5V8e8Qa5DZB0aFda4a1D0Si1GVwANWZ"
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=" + key;

    //AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function(event){
        var data = event.target.response;
        pushToDOM(data);
    });
}


/* 3. Show the Gifs */
function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    imageUrls.forEach(function(image){
        var src = image.images.fixed_height.url;
        container.innerHTML += "<img src=" + src + " class=\"container-image\">"; 
    });  
}

//clear gifs on screen to display new search items
function clearGifs() {
    document.querySelector(".js-container").innerHTML = "";
}