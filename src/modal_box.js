
// When the user clicks anywhere outside of the modal, close it
window.onload = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) { // target evolution of zoiets
        modal.style.display = "block";
    }
}