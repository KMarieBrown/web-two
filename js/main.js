$(document).ready(function (){

    $('#submitBtn').addClass('submit');
    $('.submit').click(function(){
        alert("Thanks for your submission. I'll get back to you shortly!");
    });

});

function openWin() {
    var NEWSLETTER = window.open("", "NEWSLETTER", "width=200, height=100");
    NEWSLETTER.document.write("<p>Stay Tuned!<p> <p>Newsletter to be released Fall 2020</p>");
    setTimeout(function(){ NEWSLETTER.close() }, 4000);
  }


// console.log("This is a test for my js script");