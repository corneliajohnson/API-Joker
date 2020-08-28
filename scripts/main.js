const jokeBtn = document.querySelector(".request-joke-btn");
import { getJoke, useJoke } from "./JokeProvider.js";
import { Joke } from "./Joke.js";

const jokeSetupUI = document.querySelector(".joke-setup");
const jokePunchlineUI = document.querySelector(".joke-punchline");

jokeBtn.addEventListener("click", (e) => {
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke().then((responseData) => {
    const jokeStingObj = Joke(responseData);
    const randomJoke = useJoke(jokeStingObj);
    jokeSetupUI.innerHTML = `Setup: ${randomJoke.setup}`;
    jokePunchlineUI.innerHTML = `Puncheline: ${randomJoke.punchline}`;
  });
});
