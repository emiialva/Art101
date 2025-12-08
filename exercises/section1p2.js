
 function checkMood(score) {  
  let mood;
    if (score > 7){mood= "neutral";} 
    else if (score > 4){mood= "tired";}
    else {mood = "bored";} 
    
return mood;
  }
  
  function showMood() {
    let randomScore = Math.floor(Math.random() * 10) + 1;
    let moodResult = checkMood(randomScore); 

     
    $("#mood-display").html(
      "Score: " + randomScore + "<br>Your mood is: <b>" + moodResult + "</b>"
    );
  }

   
   $("#mood-button").click(function () {
    showMood(); 
  });

  