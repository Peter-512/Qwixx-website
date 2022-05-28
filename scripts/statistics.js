import {gamesJSON} from "../rest/games.js";
import {usersJSON} from "../rest/users.js";

const games = JSON.parse(gamesJSON);
const statsForm = document.getElementById("statistics");


const fillInUsernameIfNotAdmin = () => {
	const name = window.localStorage.getItem("NAME");
	const users = JSON.parse(usersJSON);
	const user = users.filter(user => user.name === name);
	if (user.length === 0)
		return;

	const {user_role} = user[0];
	if (user_role !== "Admin") {
		const playerName = document.getElementById("playerName");
		playerName.value = name;
		playerName.disabled = true;
	}
};

fillInUsernameIfNotAdmin();

const sortOnColumn = (games, button, column) => {
	const asc = button.innerText === "⬇️";
	const sorted = games.sort((a, b) => {
		const aCol = parseInt(a[column]);
		const bCol = parseInt(b[column]);
		if (asc)
			return (aCol > bCol) ? 1 : (aCol < bCol ? -1 : 0);
		else
			return (aCol < bCol) ? 1 : (aCol > bCol ? -1 : 0);
	});
	return [sorted, asc];
};

const buildTable = (games, asc, column) => {
	const form = document.querySelector("main section.login_box div.wrapper");
	const oldTable = document.querySelectorAll("main section.login_box div.wrapper")[1];
	if (oldTable)
		oldTable.remove();
	const table = document.createElement("table");
	const wrapper = document.createElement("div");
	wrapper.classList.add("wrapper");

	const thGameID = document.createElement("th");
	thGameID.innerText = "Game ID ";
	const gameIdSortButton = document.createElement("button");
	if (asc === undefined || column !== 'game_id')
		gameIdSortButton.innerText = "Sort";
	else gameIdSortButton.innerText = asc ? "⬆️" : "⬇️";

	gameIdSortButton.addEventListener("click", ev => {
		const [sorted, asc] = sortOnColumn(games, gameIdSortButton, 'game_id');
		buildTable(sorted, asc, 'game_id');
	});
	thGameID.append(gameIdSortButton);

	const thName = document.createElement("th");
	thName.innerText = "Name";

	const thTotalScore = document.createElement("th");
	thTotalScore.innerText = "Total Score ";
	const scoreSortButton = document.createElement("button");
	if (asc === undefined || column !== 'total_score')
		scoreSortButton.innerText = "Sort";
	else scoreSortButton.innerText = asc ? "⬆️" : "⬇️";

	scoreSortButton.addEventListener("click", ev => {
		const [sorted, asc] = sortOnColumn(games, scoreSortButton, 'total_score');
		buildTable(sorted, asc, 'total_score');
	});
	thTotalScore.append(scoreSortButton);

	const thIsWin = document.createElement("th");
	thIsWin.innerText = "Win?";
	const thStartTime = document.createElement("th");
	thStartTime.innerText = "Played at";

	const trHeaders = document.createElement("tr");
	trHeaders.append(thGameID, thName, thTotalScore, thIsWin, thStartTime);
	table.append(trHeaders);

	for (let game of games) {
		const {game_id, name, total_score, is_win, start_time} = game;

		const tr = document.createElement("tr");

		const tdGameID = document.createElement("th");
		tdGameID.innerText = game_id;
		const tdName = document.createElement("th");
		tdName.innerText = name;
		const tdTotalScore = document.createElement("th");
		tdTotalScore.innerText = total_score;
		const tdIsWin = document.createElement("th");
		tdIsWin.innerText = is_win ? "✅" : "❌";
		const tdStartTime = document.createElement("th");
		tdStartTime.innerText = start_time.split(" ")[0].split("-").reverse().join(".");

		tr.append(tdGameID, tdName, tdTotalScore, tdIsWin, tdStartTime);
		table.append(tr);
	}

	wrapper.append(table);
	form.after(wrapper);
};


statsForm.addEventListener("submit", event => {
	event.preventDefault();
	const id = document.getElementById("id").value;

	let filteredGames = JSON.parse(gamesJSON);

	if (id !== "") {
		// ignore remaining fields
		filteredGames = games.filter(game => game.game_id === parseInt(id));
		console.log(filteredGames);
	} else {
		// do query with other data
		const score = document.getElementById("score").value;
		const scoreSelector = document.getElementById("score-selector").value;
		const playerName = document.getElementById("playerName").value;
		const isWin = document.getElementById("win").value;
		const dateAfter = document.getElementById("date-after").value;
		const dateBefore = document.getElementById("date-before").value;

		switch (scoreSelector) {
			case "above": {
				filteredGames = filteredGames.filter(game => parseInt(score) < game.total_score);
				break;
			}
			case "equal": {
				filteredGames = filteredGames.filter(game => parseInt(score) === game.total_score);
				break;
			}
			case "under": {
				filteredGames = filteredGames.filter(game => parseInt(score) > game.total_score);
				break;
			}
			default:
				break;
		}

		if (playerName !== "") {
			filteredGames = filteredGames.filter(game => playerName === game.name);
		}

		switch (isWin) {
			case "yes": {
				filteredGames = filteredGames.filter(game => game.is_win === true);
				break;
			}
			case "no": {
				filteredGames = filteredGames.filter(game => game.is_win === false);
				break;
			}
			default:
				break;
		}

		if (dateAfter !== "") {
			filteredGames = filteredGames.filter(game => game.start_time > dateAfter);
		}
		if (dateBefore !== "") {
			filteredGames = filteredGames.filter(game => game.start_time < dateBefore);
		}
	}
	buildTable(filteredGames);
});
