function checkMessage() {
	let message = prompt('Enter the message:');
	
	if (message.includes("FR")|| message.includes("FR") && message.includes("AI")) {
		document.getElementById('result').innerHTML = "The message " + message + " is legitimate.";		
	}
	else if (message.includes("AI") || message.includes("aI") || message.includes("ai")) {
		document.getElementById('result').innerHTML = "The message " + message + " is tampered with.";
	}
	else {
		document.getElementById('result').innerHTML = "The message " + message + " is yet to be encoded.";
	}
}
