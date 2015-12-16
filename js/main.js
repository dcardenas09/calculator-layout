$(document).ready(function() {
    $(".button, #zero").on("click", function(){
        var valueClicked = $(this).attr("tech");
        if($("#screen").html().length < 12){ 
        $("#screen").append(valueClicked);
        }
    });

    $(".button, #equals, #clear, #clear-all").on("click", function(){
        var extraClicks = $(this).attr("zone");
        console.log(extraClicks);
    });

    
    $("#clear-all").click(function() {
        $("#screen").html("");
    });
});



  