const loginButton = document.getElementById("login-button");

if (window.localStorage.getItem("NAME") !== null) {
	loginButton.innerText = "Logout";

	const li = document.createElement("li");
	li.id = "stats-button";
	const a = document.createElement("a");
	if (document.URL.includes("index.html")) {
		a.href = "pages/game_statistics.html";
	} else {
		a.href = '../pages/game_statistics.html'
	}
	const button = document.createElement("button");
	button.classList.add("button");
	button.value = "Game Statistics";
	button.innerText = "Game Statistics";
	a.append(button);
	li.append(a);
	const navList = document.getElementById("nav-list");
	navList.append(li);
}

const logout = () => {
	window.localStorage.clear();
	loginButton.innerText = "Login";
	const statsButton = document.getElementById("stats-button");
	statsButton.remove();
};

loginButton.addEventListener("click", ev => {
	if (loginButton.innerText === "Logout") {
		ev.preventDefault();
		logout();
	}
});
