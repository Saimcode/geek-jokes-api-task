// Creating variables
const button = document.querySelector(".container button");
const jokeDiv = document.querySelector(".container .joke p");

// When the website refreshes, a new joke is shown. (Instead of having black container or dummy text)
document.addEventListener("DOMContentLoaded", getJoke);

// Get a new joke when the button is clicked
button.addEventListener("click", getJoke);

async function getJoke() {
    // Fetching Geek Joke API
    const jokeData = await fetch("https://geek-jokes.sameerkumar.website/api?format=json", {
        headers: {
            Accept: "application/json"
        }
    });
    // Converting the Fetched Data into .json file
    const jokeObj = await jokeData.json();
    // Presenting only the joke on HTML file
    jokeDiv.innerHTML = jokeObj.joke;
}
