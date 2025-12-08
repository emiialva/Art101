function askNumber(whatNumber) {
    let userNumber = prompt("Guess 1-10?");
    if (userNumber == whatNumber) {
        $("#output").html("You got it!");
    }
    else {
        $("#output").html("Nooooope");

    }
}
$("#good-button").click(function () {
    askNumber(5);
});  


