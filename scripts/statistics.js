import {gamesJSON} from "../rest/games";
import {usersJSON} from "../rest/users";



const games = JSON.parse(gamesJSON);
const users = JSON.parse(usersJSON);

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
