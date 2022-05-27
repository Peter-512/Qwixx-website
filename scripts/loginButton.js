const loginButton = document.getElementById("login-button");

if (window.localStorage.getItem("NAME") !== null) {
	loginButton.innerText = "Logout";
}

const logout = () => {
	window.localStorage.clear();
	loginButton.innerText = "Login";
};

loginButton.addEventListener("click", ev => {
	if (loginButton.innerText === "Logout") {
		ev.preventDefault();
		logout();
	}
});
