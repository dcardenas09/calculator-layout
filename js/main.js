$(document).ready(function() {
        var op1;
        var sign;
        var op2;
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
    
    $("#equals").click(function(){
        op2 = $("#screen").html();
        $("#screen").html(eval( op1 + sign + op2 ) );
    });
    
    $(".operators").click(function(){
        sign = $(this).html();
        op1 = $("#screen").html();
        $("#screen").html("");
    });

    $("#clear-all").click(function() {
        $("#screen").html("");
    });
});
  
