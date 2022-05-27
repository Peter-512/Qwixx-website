import {gamesJSON} from "../rest/games";
import {usersJSON} from "../rest/users";

const games = JSON.parse(gamesJSON);
const users = JSON.parse(usersJSON);

const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
    getInfo();
});



// const {userJSON} = require("user");
// const mydata = JSON.parse(userJSON)
// console.log(mydata)


function getInfo() {
	let name = document.getElementById("name").value;
	let password = document.getElementById("password").value;
	let user_role = document.getElementById("user_role").value;

	for (let i = 0; i < users.length; i++) {
		if (username === users[i].username && password === users[i].password) {
			console.log(username + "is logged in");
		} else {
			console.log("incorrect username or password.");
		}
	}
}
