import {gamesJSON} from "../rest/games";
import {usersJSON} from "../rest/users";



const games = JSON.parse(gamesJSON);
const users = JSON.parse(usersJSON);

const username = document.getElementById("username");
const password = document.getElementById("password");


function getgame(){
    let name = username.value;
    let pw = password.value;

    for(const key in users){
        if(users.hasOwnProperty(key) === username){
          document.getElementById().innerHTML = username;
        }
    }


}