
let count= 0 ; 
let colors=["Orchid", "Coral","HotPink", "Plum","Teal", "Navy",];  //new line tp add 
 
$("#needy-button").click(function() 
{ 
  let reminder=count% colors.length;  

  $("#needy-button").html("clicks: " + count +" Color: "+ colors[count]);  
  //new line tp add 
      
  $("body").css("background-color",colors[reminder]); 

    count = count + 1; 

 }); 

// messages [count%messages.length] 
//remainder (%) operator returns the remainder left over when one operand 
