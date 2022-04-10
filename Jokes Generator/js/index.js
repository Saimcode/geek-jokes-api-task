const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

document.addEventListener("DOMContentLoaded", getJoke);

button.addEventListener("click", getJoke);

async function getJoke() {
    // Fetching Geek Joke API
    const jokeData = await fetch("https://geek-jokes.sameerkumar.website/api?format=json", {
        headers: {
            Accept: "application/json"
        }
    });
    // Presenting on HTML file
    const jokeObj = await jokeData.json();
    jokeDiv.innerHTML = jokeObj.joke;
    console.log(jokeData);
}
