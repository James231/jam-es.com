// -------------------------------------------------------------------------------------------------
// Jam-Es.com Website - © Copyright 2020 - Jam-Es.com
// Licensed under the MIT License (MIT). See LICENSE in the GitHub repository for license information.
// -------------------------------------------------------------------------------------------------

function validateForm() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('message').value;
	if ((name) && (email) && (message)) {
		document.getElementById("ErrorMessage").style.display='none';
		return true;
	} else {
		document.getElementById("ErrorMessage").style.display='block';
		return false;
	}
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
      	scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});