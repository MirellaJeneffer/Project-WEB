# Project-WEB

Overzichtspagina verhalen website 
Structuur van de HTML
De HTML is zo ingedeeld hoe de website er uit moet gaan zien. Van boven tot benenden.

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="vieuwport" content="width=device-width, initial scale=1">
    <link rel="stylesheet" href="overzicht.css" />
    <title> Leesbundel </title>
</head>

<body>
    <!-- de header met daar in het menu, de titel zit in de header om het de titel van de hele website is.-->
    <header>
        <nav>
            <img class="logo" src="images/transavia-logo.svg" alt="transavia logo">
            <ul>
                <li><a href="#">Profiel</a></li>
                <li><a href="#">Leesbundel</a></li>
                <li><a href="aanmelden.html">Aanmelden</a></li>
            </ul>
        </nav>
        <h1> Verhalen website</h1>
        <img class="background" src="images/driekhoek.svg" alt="vormgeving van de header">
    </header>

    <!-- article voor aanbevolen verhalen met afbeelding van het verhaal en het logo die boven het verhaal is geplaatst-->

    <img class="logo" src="images/logo.png" alt="transavia logo">
    <article class="aanbevolen-article">
        <h2> Aanbevolen verhaal</h2>
        <img src="images/zombi.svg" alt="zombi cover">
    </article>


    <!-- Article met twee verhalen/afbeeldingen met buttons-->
    <article class="mijn-lijst">
        <h2> Mijn lijst </h2>
        <img src="images/blind.png" alt="verhaal cover blind">
        <button class="verderlezen">Veder lezen</button>
        <img src="images/telegrafisch2.png" alt="verhaal cover telegrafisch">
        <button class="lezen">Lezen</button>
    </article>

    <!-- In de main zitten alle verhalen-->
    <main>
        <h3>Alle verhalen</h3>
        <!-- Van de filter heb ik een section gemaakt omdat een van het document is, de gebruiker ziet de filter alleen als er opgedrukt word.-->
        <section>
            <button onclick="show()" class="filter-button">filter</button>
            <!-- Dit is een div zodat de filter gestyld kon worden door css, als er op de button filter word gedrukt.-->
            <div id="filter">
                <h3 class="h3"> Waar bent u naar op zoek?</h3>
                <fieldset>
                    <form>
                        <label class="sorteren">Sorteren op
                            <select class="dropdown">
                                <option value="meest gelezen">Meest gelezen</option>
                                <option value="meest geliked">Meest geliked</option>
                                <option value="meest comments">Meeste comments</option>
                            </select>
                        </label>
                    </form>
                </fieldset>

                <fieldset>
                    <legend>Thema</legend>
                    <label>Drama
                        <input type="checkbox" name="drama">
                    </label>
                    <label>Actie
                        <input type="checkbox" name="actie">
                    </label>
                    <label>Familie
                        <input type="checkbox" name="familie">
                    </label>
                    <label>Avontuur
                        <input type="checkbox" name="avontuur">
                    </label>
                    <label>Thriller
                        <input type="checkbox" name="thriller">
                        <span class="checkmark"></span>
                    </label>
                    <label>Comedy
                        <input type="checkbox" name="comedy">
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Leestijd</legend>
                    <label> 5 min
                        <input type="checkbox" name="min">
                    </label>
                    <label> 10min
                        <input type="checkbox" name="min">
                    </label>
                    <label> 15+ min
                        <input type="checkbox" name="min">
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Leestijl</legend>

                    <label> Eerste persoon
                        <input type="checkbox" name="eerste persoon">
                    </label>
                    <label> Derde persoon
                        <input type="checkbox" name="derde persoon">
                    </label>
                    <label> Beeldend
                        <input type="checkbox" name="beeldend">
                    </label>
                    <br>
                    <button class="button" type="submit"> zoeken</button>
                </fieldset>
            </div>

            <form class="zoekbalk">
                <input type="text" name="search" placeholder="  zoek uw verhaal">
            </form>
        </section>



        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3">DROOM</h3>
            <a href="droom.html">
                <img class="verhalen-img" src="images/droom.png" alt="verhaal cover droom"></a>
            <footer>
                <ul class="metadata">
                    <li class="like" onclick="button_pulse()">39</li>
                    <li> 12 </li>
                    <li> 72 </li>
                </ul>
            </footer>
            <button type="button" class="opslaanbutton" onclick="new_button()">Opslaan</button>
        </article>

        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3"> ALZHEIMER</h3>
            <a href="Alzheimer.html">
                <img class="verhalen-img" src="images/alzheimer.png" alt="verhaal cover alzheimer"> </a>
            <!-- de metadata heb ik in een lijst gedaan omdat het een lijst van informatie is van het verhaal-->
            <footer>
                <ul class="metadata">
                    <li> 45 </li>
                    <li> 84 </li>
                    <li> 36 </li>
                </ul>
            </footer>
            <button class="opslaanbutton" onclick="button_click()">opslaan</button>
        </article>

        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3"> TOERISTISCHE ROUTE </h3>
            <a href="toeristisch.html">
                <img class="verhalen-img" src="images/toeristische%20route.png" alt="verhaal cover toeristische route"></a>
            <footer>
                <ul class="metadata">
                    <li> 41 </li>
                    <li> 84 </li>
                    <li> 36 </li>
                </ul>
            </footer>
            <button class="opslaanbutton" onclick="button_click()">opslaan</button>
        </article>

        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3"> BLIND </h3>
            <img class="verhalen-img" src="images/blind.png" alt="verhaal cover blind">
            <footer>
                <ul class="metadata">
                    <li> 34</li>
                    <li> 56 </li>
                    <li> 98 </li>
                </ul>
            </footer>
            <button class="opslaanbutton" onclick="button_click()">opslaan</button>
        </article>

        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3"> CODE </h3>
            <img class="verhalen-img" src="images/code.png" alt="verhaal cover code">
            <footer>
                <ul class="metadata">
                    <li> 23 </li>
                    <li> 74 </li>
                    <li> 24 </li>
                </ul>
            </footer>
            <button class="opslaanbutton" onclick="button_click()">opslaan</button>
        </article>

        <!-- Dit is een article omdat op zichzelf kan staan, met een titel afbeelding/verhaal en metadata van het verhaal-->
        <article>
            <h3 class="h3"> TWITTER</h3>
            <img class="verhalen-img" src="images/twitter.png" alt="verhaal cover twitter">
            <footer>
                <ul class="metadata">
                    <li> 52 </li>
                    <li> 24 </li>
                    <li> 67 </li>
                </ul>
            </footer>
            <button class="opslaanbutton" onclick="button_click()">opslaan</button>
        </article>
    </main>

    <script src="overzicht.js">
    </script>
</body>

</html>

Structuur van de Css : De structuur van de Css is het zelfde als de website. Wat boven aan is op de website is in de Css ook helemaal boven in genoteerd zodat als je aan het coderen bent alleen hoeft te kijken naar de website en je kan makkelijk de code terug vinden. verder heb ik alle code van de mobiele versie als eerst gedaan met comments en uitleg er bij daar onder heb ik het formaat van de tablet gemaakt en daar onder van desktop. 




