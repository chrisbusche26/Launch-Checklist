// Write your JavaScript code here!

//const { myFetch, formSubmission, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    
    let listedPlanets = [];
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    //console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        console.log(result);
        listedPlanets = result;
        console.log(listedPlanets);
    
    }).then(function () {
        //console.log("line 15" + listedPlanets);
        //Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        //document.addEventListener("click", function () {
            let planet = pickPlanet(listedPlanets);
            addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
            
         //})
        
    })
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
         event.preventDefault();
         pilot = document.querySelector("input[name=pilotName]");
     copilot = document.querySelector("input[name=copilotName");
     fuelLevel = document.querySelector("input[name=fuelLevel");
        cargoLevel = document.querySelector("input[name=cargoMass");
        list = document.getElementById("faultyItems");
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        // if (formSubmission[arr].includes(undefined)) {
           
        // }
    });
 });