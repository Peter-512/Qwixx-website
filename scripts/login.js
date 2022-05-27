import {usersJSON} from "../rest/users.js";

const users = JSON.parse(usersJSON);

const userNameElement = document.getElementById("username");
const passwordElement = document.getElementById("password");
const formElement = document.getElementById("login");

formElement.addEventListener("submit", e => {
	e.preventDefault();
	getInfo(userNameElement, passwordElement);
});


// const {userJSON} = require("user");
// const mydata = JSON.parse(userJSON)
// console.log(mydata)


function getInfo() {
	let username = userNameElement.value;
	let password = passwordElement.value;

	for (let i = 0; i < users.length; i++) {
		if (username === users[i].name && password === users[i].password) {
			console.log(`${username} is logged in`);
			localStorage.setItem('name', username)
		} else {
			console.log("incorrect username or password.");
		}
	}
}
