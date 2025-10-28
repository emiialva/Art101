let myActions = ["flying", "resting", "walking", "meowing"];

let Nyanpire = {
    type: "cat",
    color: "black",
    size: "fluffy",
    halfVampire: true
};

let megaText;
megaText = "<p> Vampire cat is: " + Nyanpire.type + ", " + Nyanpire.color + ", and " + Nyanpire.size + ". One day, it suddenly gained the ability to shapeshift into a bat like it's friends</p>";
megaText = megaText + "<p> Some of it's actions in game are: " + myActions[0] + ", " + myActions[3] + ", and " + myActions[2] + "</p>";

$("#output").html(megaText);



let gameActions = ["clearing", "energy restoration", "flying"];
let instructionText;
instructionText = "<p> If you decide to play, you must safely guide Vampire Cat to it's home. Some of the actions that players will be given are as follows: " + gameActions[0] + " obstacles, " + gameActions[2] + ", and " + gameActions[1] + ". Use these wisely and have fun!</p>";

$("#output2").html(instructionText);   

let tap=0; 
$("#high2").click(function say(){  
    tap=tap+1; 
    if([tap]="2")
    alert("Aw ok... :( If you change your mind, go back and press the 'yes' button");  

});     
  
let count = 0; 
$("#high1").click( function() {
   count = count + 1;
   $("#high1").html("Click #: " + count + " (scroll down)"); 
   
   if ([count]=="2")
  $("body").append("<img width=400 src='images02/cloud.png'>"); 
if([count]=="3")  
    $("body").append("<img width=200 src='images02/purplestar.png'>"); 
if([count]=="4")  
    $("body").append("<img width=300 src='images02/bat.png'>");  

if (count == 5) { count = 0; }

});   


 
function myFunction() {
  document.body.style.backgroundImage = "url('images02/stars.png')";};

