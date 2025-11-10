// a variable for storing names 
 
// when the button is clicked (event)
 
$("#add-creature").click(   
    function(){    
    // a variable for story inggnames 

//reach for this input field and grab the text from it
      //grab hte value from input
let crName= $("#crName").val();  
 
//check for the field value do not add empty ones 
 
if(crName == "" || (crName.length>12)){// do nothing 
    } 
    else{  
        $("#creature-list").append (crName+ ", ");

    }
$("#creature-list").append (crName+ ", ");
    //here our actions when the buttons is clicked
 
    //remove the name after it's added  
    $("#crName").val("");
});
//the magic move 