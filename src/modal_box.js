// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn"); // dit moet ik aanpassen want dat gaat niet via een button, deze moet verwijderd worden

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close"); // hier heb ik de [0] verwijdert omdat het voor alle close classes moet werken

// When the user clicks on the button, open the modal
btn.onclick = function() { // dit moet ook iets anders worden dan de onclick, die btn heb ik ook verwijderd
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}