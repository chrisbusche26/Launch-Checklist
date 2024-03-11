// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    
        const doc = document.getElementById("missionTarget");
        // name = planet.name;
        // diameter = planet.diameter;
        // star = planet.star;
        // distance = planet.distance;
        // moons = planet.moon;
        // imageUrl = planet.image;
        doc.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
        `;
};

 
function validateInput(testInput) {
    let result = "";
    if (testInput === "") {
        result = "Empty"
    } else if (isNaN(testInput) === true) {
        result = "Not a Number";
    } else {
        result = "Is a Number"
    }
    return result;
};
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
     list = document.getElementById("faultyItems");
     let pilotStatus = document.getElementById("pilotStatus"); 
     let copilotStatus = document.getElementById("copilotStatus");
     let fuelStatus = document.getElementById("fuelStatus");
     let cargoStatus = document.getElementById("cargoStatus");
     let h2 = document.getElementById("launchStatus");
     let arr = [];
     console.log(pilotStatus);
    //  pilot = document.querySelector("input[name=pilotName]");
    //  copilot = document.querySelector("input[name=copilotName");
    //  fuelLevel = document.querySelector("input[name=fuelLevel");
    //  cargoLevel = document.querySelector("input[name=cargoMass");
     
     if (validateInput(pilot) === "Not a Number") {
         pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
         arr.push(pilot); 
     } else {
         arr.push(undefined);
     }

     if (validateInput(copilot) === "Not a Number") {
         copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
         arr.push(copilot); 
     } else {
         arr.push(undefined);
     }
     //console.log(fuelLevel);
     if (validateInput(fuelLevel) === "Is a Number") {
         if (fuelLevel >= 10000) {
             fuelStatus.innerHTML = "Fuel level high enough for launch";
             arr.push(fuelLevel); 
         } else {
             fuelStatus.innerHTML = "Fuel level too low for launch";
             list.style.visibility = "visible";
             arr.push(undefined);
         }
     } else {
         arr.push(undefined);
     }

     if (validateInput(cargoLevel) === "Is a Number") {
         if (cargoLevel < 10000) {
             cargoStatus.innerHTML = "Cargo mass low enough for launch";
             arr.push(cargoLevel);
         } else {
             cargoStatus.innerHTML = "Cargo mass too heavy for launch";
             list.style.visibility = "visible";
             arr.push(undefined);
         }
     } else {
         arr.push(undefined);
     }
     //console.log(arr);
    if (arr.includes(undefined)) {
        h2.innerHTML = "Shuttle Not Ready for Launch"
        h2.style.color = "red";
    } else {
        h2.innerHTML = "Shuttle is Ready for Launch"
        h2.style.color = "green";
    }
     
     return pilotStatus, copilotStatus, fuelStatus, cargoStatus, list, h2, arr;
};
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        //  response.json().then(function (json) {
        //      console.log(json);
        //      return json;
         //  });
         return response.json();

     });
     console.log(planetsReturned);
     return planetsReturned;
};
 
function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
};
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;