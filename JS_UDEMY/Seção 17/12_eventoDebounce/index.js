let timeout;

window.addEventListener("mousemova", function(e) {

    clearTimeout(timeout);
    timeout = setTimeout(function() {
        console.log(e.x);
    }, 500);
    
});

