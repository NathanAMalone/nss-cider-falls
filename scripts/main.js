/*
Main resources are Services, Park Areas, Guests
Services prop: canoeing, fishing, hiking, information, lodging, parking, picnicking,
                    rafting, rock climbing, zip lines
Park Areas prop: Lodge, Lost Wolf Hiking, Chamfort River, Grander River, Campgrounds, 
                    Pine Bluff Trails
Guest prop:  name
Sevices to Park Areas is many to many; which serv are in which areas?


need database.js with array of park areas and keys:
        database = {parkAreas: [{id: int, name: ""}], areaServices: [{id: int, name: canoeing
                    AreaId: [int], etc.}], parkGuests: [{id: int, name: ""}]}
    SHOULD BE IN THIS ORDER:    Lodge, Lost Wolf, Chamfort, Gander, Campgrounds, Pine Bluff
    Export array


import database.js
In parkAreas.js, 
    function to iterate through areas and store name in html
    function to iterate through services, if areaId === parkAreaId then list service name
    export/create function for each area that creates HTML
    function should iterate through database and list each area name and services array
        for each area of Park areas, <h2>parkArea.name</h2>
        if services === id
            <ul><h3>parkareas.services</h3></ul>
        return html


import database.js
In parkGuests.js, export create function that lists current park guests from db array in HTML
    for each guest in park guests, unordered list of names
    return html


IN index.html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Cider Falls Park</title>
        <link rel="stylesheet" href="./styles/main.css">
    </head>

    <body>
        <main id="container">

        </main>

        <script type="module" src="./scripts/main.js"></script>
    </body>
</html>
*/
import { Areas } from './parkAreas.js'
import { Guests } from './parkGuests.js'
import { Services } from './areaServices.js'



const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1><img class="logo" src="Cider_Falls_Logo.jpg"> Cider Falls Park</h1>
<h4>${Services()}<h4>
<section class="guestsAreas">
<article class="parkAreas">
    <section class="park">
        <h2 class="parkTitle">Park Areas</h2>
       <h3 id="areaFlex"> ${Areas()} </h3>
    </section>
</article>

<article class="guests">
    <h2>Current Guests</h2>
    ${Guests()}
</article>
</section>
<footer class="info_CFP"><div>Phone: 123-456-7890</div>
<div>Email: CFPinfo@info.com</div>
<div>Address: 123 Main St</div>
</footer>
`

mainContainer.innerHTML = applicationHTML

