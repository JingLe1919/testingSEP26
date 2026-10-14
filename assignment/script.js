let loginForm = document.getElementById("loginForm");
let failedAttempts = 0;

loginForm.addEventListener("submit", function(event){
	event.preventDefault();

	let username =document.getElementById("username").value;

	let password =document.getElementById("password").value;

	let message = document.getElementById("message");

	if(username.trim() === "" || password.trim() ===""){
		message.textContent = "Please fill in all fields!";
		message.className = "error";

		}else if (username.trim().length < 3) {
			message.textContent = "Username must have at least 3 characters!";
			message.className = "error";
		}else if(password.length < 6) {
			message.textContent="Password must have at least 6 characters!";	
			message.className = "error";
		}else if (username === "student" && password === "pass123"){
			message.textContent="Login successful!";
			message.className="success";
			failedAttempts=0;
		
		}else {
    			failedAttempts++;

    			if (failedAttempts >= 3) {
        			message.textContent = "Too many failed login attempts!";
    			} else {
    	    			message.textContent = "Incorrect username or password! Failed Attempts: " + failedAttempts;
		    	}

    			message.className = "error";
	}

	
});

let showpassword = document.getElementById("showpassword");
let passwordInput = document.getElementById("password");

showpassword.addEventListener("change", function (){
	if (showpassword.checked) {
		passwordInput.type="text";
	}else{
		passwordInput.type ="password";
	}
	
});




