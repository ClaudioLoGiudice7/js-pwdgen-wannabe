const userName = prompt("Qual è il tuo nome?");
console.log("Qual è il tuo nome? ", userName);

const userSurname = prompt("Qual è il tuo cognome?");
console.log("Qual è il tuo cognome? ", userSurname);

const favouriteColour = prompt("Qual è il tuo colore preferito?");
console.log("Qual è il tuo colore preferito? ", favouriteColour);

const userPwd = userName + userSurname + favouriteColour + "23"

const outputMsg = "Grazie, <br> la password sicura è " + userPwd;
console.log(outputMsg);

document.getElementById("outputMsg").innerHTML = outputMsg;