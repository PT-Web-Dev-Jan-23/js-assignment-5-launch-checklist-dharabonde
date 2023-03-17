// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   
                let targetMission = document.getElementById("missionTarget");
                targetMission.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>${name} </li>
                    <li>${diameter} </li>
                    <li>${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src= ${image}>`;
   
};

function validateInput(testInput) {
     if (testInput === "") {
         return "Empty";
     } else if (isNaN(testInput)) {
         return "Not a number";
     } else {
         return "Is a number";
     }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list = document.querySelector("#faultyItems");

    pilotName= document.querySelector("input[name=pilotName]").value;
    
    copilotName = document.querySelector("input[name=copilotName]").value;
    
    fuelLevel = document.querySelector("input[name=fuelLevel]").value;

    cargoMass = document.querySelector("input[name=cargoMass]").value;

    let pilotStatus = document.getElementById("pilotStatus");

    let copilotStatus = document.getElementById("copilotStatus");

    let fuelStatus = document.getElementById("fuelStatus");

    let cargoStatus = document.getElementById("cargoStatus");

    let launchStatus = document.getElementById("launchStatus");
    
    let launch = true;

    if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("All fields are required");
    } else if ((validateInput(fuelLevel) === "Not a number") || validateInput(cargoMass) === "Not a number") {
        alert("Values must contain numbers.");
    } else if ((validateInput(pilotName) === "Is a number") || validateInput(copilotName) === "Is a number") {
        alert("Values must contain letters.");    
    }
    

    function weAreReady() {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
        copilotStatus.innerHTML = `Copilot ${copilotName} is ready for launch`;
    };
    
   if (fuelLevel < 10000) {
        launch = false
        fuelStatus.innerHTML = "There is not enough fuel for the journey";
   } else {
       fuelStatus.innerHTML = "There is enough fuel for the journey";   
   }

   if (cargoMass > 10000) {
        launch = false;
        cargoStatus.innerHTML = "There is too much mass for the shuttle to take off";
   } else {
        cargoStatus.innerHTML = "Mass is low enough for the shuttle to take off";
   };

   if (launch) {
    launchStatus.innerHTML =  "Shuttle is ready for launch";
    launchStatus.style.color = "green";
    weAreReady();
   } else {
    launchStatus.innerHTML =  "Shuttle is not ready for launch";
    launchStatus.style.color = "red";
    weAreReady();
   }
};

async function myFetch() {
    const planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;