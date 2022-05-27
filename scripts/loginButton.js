const loginButton = document.getElementById('login-button')

if (window.localStorage.getItem('NAME') !== undefined) {
	loginButton.innerText = "Logout";
}
