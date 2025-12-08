// declaring an array with name myCommutes 
let myCommutes = ["UCSC bus", "metro bus", "walk","someone's car"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "car",
    speed: "fast",
    brand: "Toyota",
    Efficient: true,
    age: 13,
    drivers: ["Mom", "Dad"],
};

let megaSentence;
megaSentence = "<p> My two top commutes from the array are: " + myCommutes[3] + ", " + myCommutes[1] + "</p>";
megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", car age: " + myFavouriteCommute.age + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence);
 

