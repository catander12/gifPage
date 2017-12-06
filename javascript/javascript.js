$( document ).ready(function() {
    

var gifs = [];
    
 $("#buttonHolder").on("click",".gifButton", function(event){
        var remove = $(this).text();
        gifs.splice($.inArray(remove, gifs),1);
        $(this).remove();
        console.log(gifs);
        addButton();
        updateGifs();

    });


    function updateGifs(){
        for(e=0;e<gifs.length;e++){

            //emptys the current gifs so they dont repeat
            $("#holder").empty();

            //creates the url for the Ajax request
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs[e] + "&limit=2&api_key=" + ;

            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {

                for(i=0;i<2;i++){

                    //adds rating
                    var rate = $("<h3>");
                    rate.text("Rating: " + response.data[i].rating);

                    //adds gif
                    var gifPic = $("<img>");
                    gifPic.attr("src",response.data[i].images.original.url);

                    //appends all of them
                    $("#holder").prepend(rate);
                    $("#holder").prepend(gifPic);

                };
            });
        };

        if(gifs.length == 0){
            $("#holder").empty();
        };


    };

   function addGifs(){
    //takes the new input typed and adds it to the list of gifs
    if($("#gifName").val() != ""){

        var type1 = $("#gifName").val();
        gifs.push(type1);
    
        //loops through each gif in the array
        for(e=0;e<gifs.length;e++){

            //emptys the current gifs so they dont repeat
            $("#holder").empty();

            //creates the url for the Ajax request
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs[e] + "&limit=2&api_key=dc6zaTOxFJmzC";

            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {

                for(i=0;i<2;i++){

                    //adds rating
                    var rate = $("<h3>");
                    rate.text("Rating: " + response.data[i].rating);

                    //adds gif
                    var gifPic = $("<img>");
                    gifPic.attr("src",response.data[i].images.original.url);

                    //appends all of them
                    $("#holder").prepend(rate);
                    $("#holder").prepend(gifPic);

                };
            });
        };

    }else if(gifs.length == 0){

            $("#holder").empty();
        }; 
   };

    function addButton(){
        //empties button holder
            $("#buttonHolder").empty();
        

        //loops through each gif in the array
            for(e=0;e<gifs.length;e++){

                //creates button with class and adds it
                var newButton = $("<button class='gifButton'>");
                newButton.text(gifs[e]);
                $("#buttonHolder").append(newButton);

            };
    };




$("#addGif").on("click", function(event){
        addGifs();
        addButton();
        $("#gifName").val("");
   });
 });

    