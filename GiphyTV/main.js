/* Call Giphy API to retreive trending gifs */
    var api_key = "i5V8e8Qa5DZB0aFda4a1D0Si1GVwANWZ"
    var url = "http://api.giphy.com/v1/gifs/search?q=Funny+Video&api_key=" + api_key;


    //AJAX request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load', function(event){
        var data = event.target.response;
        pushToDOM(data);
    });


/* --------------- Manipulate gifs -----------------*/

//display gif on screen
function pushToDOM(input) {

    var response = JSON.parse(input);

    var imageUrls = response.data;
    var container = document.querySelector(".js-container");

    var t = 1;  //control timeout function below
    imageUrls.forEach(function(image){
        //shows first gif without the timeout
        var src = image.images.fixed_height.url;
        container.innerHTML = "<img src=" + src + " class=\"container-image\">";
        setTimeout(function(){
            clearGif();
            //subsequent gifs are affected by timeout
            src = image.images.fixed_height.url;
            container.innerHTML = "<img src=" + src + " class=\"container-image\">";
        }, 3000*t);

        t++;
    });  
}

//clear gif on screen
function clearGif() {
    document.querySelector(".js-container").innerHTML = "";
}