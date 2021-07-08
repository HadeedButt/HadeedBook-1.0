var database = [
	{
		username : "hadeed",
		password : "secret"
	}
];

var newsfeed = [
	{
		username: "Mohid",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Zalaid",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Maaz",
		timeline: "Javascript is preeetyy cool!"
	}
];


var userNamePrompt = prompt("Whats your Username?");
var passwordPrompt = prompt("Whats your Password?");

function signIn(user, pass){
	if(user === database[0].username &&
	   pass === database[0].password) {
		console.log(newsfeed);
	}else{
		alert("Wrong username & password")
	}
}

signIn(userNamePrompt, passwordPrompt)
