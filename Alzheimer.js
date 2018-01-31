Hier word de microinteracite van het verhaal Alzheimer gedefineerd

// BRON : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_indicator

/*als er gescrollt wordt de function my function aangeroepen*/
window.onscroll = function() {myFunction()};

/* hier wordt in variable opgeslagen dat het er een verticale scroll is, de hoogte van de pagina en vervolgens wordt het opgedeeld zodat er herkent wordt wat 100% gescrolled is*/
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
