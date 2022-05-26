var objPeople = [
    {
        name: "Skynet",
        password: "tenyks",
        user_role: "Player"
    },
    {
        name: "Peter",
        password: "retep",
        user_role: "Admin"
    },
    {
        name: "Piet",
        password: "teip",
        user_role: "Player"
    },
    {
        name: "Toni",
        password: "inot",
        user_role: "Player"
    },
    {
        name: "Bossi Granda",
        password: "adnargissob",
        user_role: "Player"
    },
    {
        name: "Nova",
        password: "avon",
        user_role: "Admin"
    },
    {
        name: "Brandon",
        password: "nodnarb",
        user_role: "Admin"
    }
]

function getInfo(){
    var name = document.getElementById("name").value
    var password = document.getElementById("password").value
    var user_role = document.getElementById("user_role").value

    for(i=0;i<objPeople.length;i++){
        if(username == objPeople[i].username&& password == objPeople[i].password && user_role==objPeople[i].user_role){
           console.log(username + "is logged in")
        }else{
            console.log("incorrect username or password.")
        }
    }
}