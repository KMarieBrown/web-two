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

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// console.log("This is a test for my js script");