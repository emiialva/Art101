 let count=0;
 let colors =["red","orange","yellow","green"];   

$("#magic-button").click(function(){
let reminder=count%+ colors.length;   
$("#needy-button").html(" Color: " + colors[count]);      
 $("body").css("background-color",colors[count]);  
 count= count + 1; 
});  


