import {usersJSON} from "../rest/users.js";

const users = JSON.parse(usersJSON);

const userNameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const formElement = document.getElementById("login");

formElement.addEventListener("submit", e => {
	e.preventDefault();
	verify(userNameElement, passwordElement);
	formElement.submit();
});




function verify(name, pw) {
	let username = name.value;
	let password = pw.value;

	for (let i = 0; i < users.length; i++) {
		if (username === users[i].name && password === users[i].password) {
			window.localStorage.setItem("NAME", username);
			console.log(`${username} is logged in`);
		}
	}
}
