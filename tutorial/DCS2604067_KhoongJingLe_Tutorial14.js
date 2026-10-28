
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;

    document.getElementById("result").textContent = "Welcome, " + username + "!";
});

function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("result").textContent = "";
}
