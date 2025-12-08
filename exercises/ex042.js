
let count= 0 ;  
let colorCount=0;
let colors=["Orchid", "Coral","HotPink", "Plum",];  //new line tp add 
 
$("#needy-button").click(function() 
{ 
  let reminder=count% colors.length;   
   
  
  if(count < 5) {mood="fresh and happy";} 
  else if ((count>=5) && (count<10)){mood="keep pushing";} 
  else {mood= "so tired";}

  $("#needy-button").html("clicks: " + count + 
    " Color: "+ colors[colorCount] + " "+mood); 
  //new line tp add  
   
  
      
  $("body").css("background-color",colors[colorCount]); 
 
  if (colors[colorCount]=="Orchid")
  $("body").append("<img width=50 src='images/orchid.png'>"); 

    count = count + 1;   
    colorCount= colorCount + 1;
     
    if (colorCount== 4){colorCount= 0;} 
  
 
 }); 

// messages [count%messages.length] 
//remainder (%) operator returns the remainder left over when one operand  
