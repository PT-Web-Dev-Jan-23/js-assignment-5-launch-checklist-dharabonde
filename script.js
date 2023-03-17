// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let list = document.querySelector("#faultyItems");

        let pilot= document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        event.preventDefault();
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
 
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        let otherWorldly = pickPlanet(listedPlanets)
        addDestinationInfo(document, otherWorldly.name, otherWorldly.diameter, otherWorldly.star, otherWorldly.distance,otherWorldly.moons,otherWorldly.image);
    });
   
});