
const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit',(e) =>{
  e.preventDefault()
})




// const username = JSON.parse(username)
// const password = JSON.parse(password)

//
//
// const {userJSON} = require("user");
// const mydata = JSON.parse(userJSON)
// console.log(mydata)
//









function getInfo(){
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let user_role = document.getElementById("user_role").value

    for(i=0;i<objPeople.length;i++){
        if(username == objPeople[i].username&& password == objPeople[i].password && user_role==objPeople[i].user_role){
           console.log(username + "is logged in")
        }else{
            console.log("incorrect username or password.")
        }
    }
}