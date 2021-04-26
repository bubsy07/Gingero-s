//hover

$("#Appetizers h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#Appetizers h3").mouseleave(function () {
    $(this).css('color', 'red');
});

$("#Starters h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#Starters h3").mouseleave(function () {
    $(this).css('color', 'red');
});

$("#Sides h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#Sides h3").mouseleave(function () {
    $(this).css('color', 'red');
});


$("#pizzaToggle h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#pizzaToggle h3").mouseleave(function () {
    $(this).css('color', 'red');
});

$("#pastaToggle h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#pastaToggle h3").mouseleave(function () {
    $(this).css('color', 'red');
});


$("#mains h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#mains h3").mouseleave(function () {
    $(this).css('color', 'red');
});

$("#dessertsToggle h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#dessertsToggle h3").mouseleave(function () {
    $(this).css('color', 'red');
});

$("#drinksToggle h3").mouseenter(function () {
    $(this).css('color', 'green');
});

$("#drinksToggle h3").mouseleave(function () {
    $(this).css('color', 'red');
});


//toggle

$("#Appetizers h3").click(function () {
$("#appToggle").slideToggle("slow"); 
          
});

$("#Starters h3").click(function () {
$("#startersToggle").slideToggle("slow"); 
          
});

$("#Sides h3").click(function () {
$("#sidesToggle").slideToggle("slow"); 
          
});

$("#pizzaToggle h3").click(function () {
$("#pizzaToggleli").slideToggle("slow"); 
          
});

$("#pastaToggle h3").click(function () {
$("#pastaToggleli").slideToggle("slow"); 
          
});

$("#mains h3").click(function () {
$("#mainsToggleli1").slideToggle("slow"); 
$("#mainsToggleli2").slideToggle("slow");          
});

$("#dessertsToggle h3").click(function () {
$("#dessertsToggleli").slideToggle("slow");         
});

$("#drinksToggle h3").click(function () {
$("#drinksToggleli").slideToggle("slow");         
});