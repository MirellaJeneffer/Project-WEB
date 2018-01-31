/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* BRON : http://www.slashcoding.com/wp-content/uploads/2013/10/HTML-Code.png*/


/*als het element met de id filter gestyled wordt met display dan wordt er display gezet op none hier wordt het niet weergeven anders wordt display gezet op block hier wordt het wel weergeven*/
function show() {
    if (document.getElementById('filter').style.display == 'block')
        document.getElementById('filter').style.display = 'none';
    else
        document.getElementById('filter').style.display = 'block';
}


/* De class like word opgehaald uit de html en er word een nieuwe class bij toegevoegd en de tekst die in de html is wordt overschreven*/
function button_pulse() {
    document.querySelector(".like").classList.add("newpulse");
    document.querySelector(".like").innerHTML="40";
}

/* De class word opgehaald uit de html en de tekst word overschreven door opgeslagen. Er word en class bijgevoegd*/
function new_button () {
 document.querySelector(".opslaanbutton").innerHTML="Opgeslagen";
document.querySelector(".opslaanbutton").classList.add("nieuwebutton");
}
