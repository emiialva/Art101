
 function checkMood(score) { 
    if (randomScore > 7){moodResult= "neutral";} 
    else if (randomScore > 4){moodResult= "tired";}
    else {randomScore = "bored";} 
    

  }


  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore); 

     
    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

 
   
   $("#mood-button").click(function () {
    showMood(); });
