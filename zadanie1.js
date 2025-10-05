const userName = "sara";
const userAge = 25;
const likesJavaScript = false;
const userHobby = "painting";
const userCity = "Cracow";
const capitalUsername = userName.charAt(0).toUpperCase() + userName.slice(1);
const futureAge = userAge + 10;
const isAdult = userAge >= 18;
const isWarsawCitizen = userCity.toLowerCase() === "warsaw";
const likesJSAndIsAdult = likesJavaScript && isAdult;

let greeting = `Hello ${capitalUsername}\nAge: ${userAge}`;

if (likesJavaScript) {
  greeting += "\nLikes JavaScript";
}

if (isWarsawCitizen) {
  greeting += "\nWarsaw citizen";
}

greeting += `\nHobby is ${userHobby}`;
