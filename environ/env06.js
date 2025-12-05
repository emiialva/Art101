
//my actions and details 
let myActions = ["flying", "resting", "walking", "meowing"];
let Nyanpire = {
  type: "cat",
  color: "black",
  size: "fluffy",
  halfVampire: true
};

//character actions and instructions 
let gameActions = ["clearing", "energy restoration", "flying"];
let instructionText;
instructionText = "<p> If you decide to play, you must safely guide Vampire Cat to it's home by collecting as many stars as you can. Some of the actions that players will be given are as follows: " + gameActions[0] + " obstacles, " + gameActions[2] + ", and " + gameActions[1] + ". Use these wisely and have fun!</p>";
$("#output2").html(instructionText);

let megaText;
megaText = "<p> Vampire cat is: " + Nyanpire.type + ", " + Nyanpire.color + ", and " + Nyanpire.size + ". One day, it suddenly gained the ability to shapeshift into a bat like it's friends</p>";
megaText = megaText + "<p> Some of it's actions in game are: " + myActions[0] + ", " + myActions[3] + ", and " + myActions[2] + "</p>";

$("#output").html(megaText);

//validity 
function isNyanpireValid(Nyanpire) {

  if (Nyanpire === "halfVampire") return true;

};


//No button
let tap = 0;
$("#high2").click(function say() {
  tap = tap + 1;
  if ([tap] = "2")
    alert("Aw ok... :( If you change your mind, go back and press the 'yes' button");

});

//yes button 
let count = 0;
$("#high1").click(function () {
  count = count + 1;
  $("#high1").html("Click #: " + count + " (scroll down)");

  if ([count] == "2")
    $("body").append($("#cloudyImg"));
  if ([count] == "3")
    $("body").append("<img width=100 height=100 src='images02/purplestar.png'>");
  if ([count] == "4")
    $("body").append($("#batImg"));

  if (count == 5) { count = 0; }
  $("#weather").remove()
});


// change background & animate cat button
function myFunction() {
  document.body.style.backgroundImage = "url('images02/stars.png')";
};

$("#weather").click(function () {
  $(".vampkitty").animate({
    left: '200px',
    height: '300px',
    width: '250px'
  });
  $("#high2").remove();
});

//blast buton
$("#blast").click(function () {
  count = 0;
  $("img").remove($("body").append($("#batImg")));


  $("body").append($("#cloudyImg"));
}); 

//hover color
$("#output2").hover(function () {
  $(this).css("background-color", "hotpink");
}, function () {
  $(this).css("background-color", "grey");
}); 

//cat move w/ mouse
$(".vampkitty").mousemove(function (event) {
  $(".vampkitty").css({
    left: event.pageX - 70,
    top: event.pageY - 70,
    position: "absolute"
  }); 
}); 

//mouse pop up alert
$("#text").mouseenter(function () {
  alert("Scroll down to start playing the game :)");
});

