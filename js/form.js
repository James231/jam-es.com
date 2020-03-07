// -------------------------------------------------------------------------------------------------
// Jam-Es.com Website - © Copyright 2020 - Jam-Es.com
// Licensed under the MIT License (MIT). See LICENSE in the GitHub repository for license information.
// -------------------------------------------------------------------------------------------------

var endpointUrl = "https://script.google.com/macros/s/AKfycbyXIzaQd6IrTeTCYDwOO8yIHuZHwKJm2lPJU6cPAtZ5AFP_BrI/exec";

function submitPressed() {
	var fullname = document.getElementById("fullnameInput").value;
	var email = document.getElementById("emailInput").value;
	var message = document.getElementById("messageInput").value;
	var canResp = grecaptcha.getResponse();
	console.log(canResp);
	if ((!fullname)||(!email)||(!message)) {
		showError("One of the fields is empty!");
		return;
	}
	if (fullname.length > 200) {
		showError("Name too long");
		return;
	}
	if (email.length > 200) {
		showError("Name too long");
		return;
	}
	if (message.length > 2000) {
		showError("Message too long");
		return;
	}
	if (canResp == "") {
		showError("Captcha not completed!");
		return;
	}
	var xhr = new XMLHttpRequest();
	xhr.open("POST", endpointUrl, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = function() {
	    if ("" + xhr.readyState == "4") {
	    	hideLoading();
	    	if (xhr.status == 200) {
	    		var response = "" + xhr.response;
	    		if (response == "Bad Regex") {
	    			showError("Email not valid! Try another.");
					return;
	    		}
	    		if (response == "Invalid Captcha") {
	    			showError("Captcha not valid. Try again.");
	    			return;
	    		}
	    		if (response == "Success") {
	    			showSuccess();
	    			return;
	    		}
	    	}
	        showError("An Unknown Error Occurred. Please try again later.");
    		return;
    	}
	};
	showLoading();
	xhr.send("full_name=" + encodeURIComponent(fullname) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message) + "&token=" + encodeURIComponent(canResp));
}

function showError(errText) {
	hideLoading();
	document.getElementById("ErrorMessage").innerHTML = errText;
	document.getElementById("ErrorMessage").style.display = "block";
}

function showSuccess() {
	document.getElementById("ErrorMessage").style.display = "none";
	hideLoading();
	grecaptcha.reset();
	alert("Form Submitted Successfully.");
}

function showLoading() {
	document.getElementById("form").style.display = "none";
	document.getElementById("sending").style.display = "block";
}

function hideLoading() {
	document.getElementById("form").style.display = "block";
	document.getElementById("sending").style.display = "none";
}