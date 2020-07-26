window.addEventListener("load", function() {
    alert("Assine os nossos termos de uso!");
});

window.addEventListener("beforunload", function() {
    event.returnValue = null;
});

