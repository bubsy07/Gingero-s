$("#Appetizers h3").mouseenter(function () {
    $(this).css('color', 'lightgreen');
});

$("#Appetizers h3").mouseleave(function () {
    $(this).css('color', '#555555');
});


$("#Appetizers h3").click(function () {
$("ul").slideToggle("slow"); 
        $("#contact-form").hide("slow");   
    });