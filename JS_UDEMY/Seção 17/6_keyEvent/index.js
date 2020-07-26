window.addEventListener("keydown", function(e) {

    if(e.key == 'q'){
        console.log("Apertou a letra Q");
    } else if(e.key == 'Enter') {
        console.log("Apertoi o enter");
    }
});

window.addEventListener("keyup", function(e) {
    
    if(e.key == "Enter") {
        console.log("Soltou o enter");
    }
})