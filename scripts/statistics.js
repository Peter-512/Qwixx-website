import {gamesJSON} from "../rest/games.js";

const games = JSON.parse(gamesJSON);
const statsForm = document.getElementById("statistics");

statsForm.addEventListener("submit", event => {
	event.preventDefault();
	const id = document.getElementById("id").value;
	if (id !== "") {
		// ignore remaining fields
		const filteredGames = games.filter(game => game.game_id === parseInt(id));
		console.log(filteredGames);
		// build table
	} else {
		// do query with other data
		const score = document.getElementById("score").value;
		const scoreSelector = document.getElementById("score-selector").value;
		const playerName = document.getElementById("playerName").value;
		const isWin = document.getElementById("win").value;
		const dateAfter = document.getElementById("date-after").value;
		const dateBefore = document.getElementById("date-before").value;


		const games = JSON.parse(gamesJSON);

		let filteredGames = games;

		switch (scoreSelector) {
			case "above": {
				filteredGames = filteredGames.filter(game => parseInt(score) > game.total_score);
				break;
			}
			case "equal": {
				filteredGames = filteredGames.filter(game => parseInt(score) === game.total_score);
				break;
			}
			case "under": {
				filteredGames = filteredGames.filter(game => parseInt(score) < game.total_score);
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

		console.log(filteredGames);
	}
});
