import {usersJSON} from "../rest/users.js";

const users = JSON.parse(usersJSON);

const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("login");

form.addEventListener("submit", e => {
	e.preventDefault();
	getInfo(username, password);
});


// const {userJSON} = require("user");
// const mydata = JSON.parse(userJSON)
// console.log(mydata)


function getInfo() {
	let name = username.value;
	let pw = password.value;

	for (let i = 0; i < users.length; i++) {
		if (name === users[i].name && pw === users[i].password) {
			console.log(`${name} is logged in`);
		} else {
			console.log("incorrect username or password.");
		}
	}
}
