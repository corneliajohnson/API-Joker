const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".get-joke-btn");
const jokeSetupUI = document.querySelector(".joke-setup");
const jokePunchlineUI = document.querySelector(".joke-punchline");

import { getJoke, useJoke } from "./JokeProvider.js";
import { JokeSetup, JokePunchline } from "./Joke.js";

jokeBtn.addEventListener("click", (e) => {
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke()
    .then(() => {
      const jokeStingObj = JokeSetup(useJoke());
      jokeSetupUI.innerHTML = jokeStingObj;
    })
    .then(() => {
      punchlineBtn.addEventListener("click", (e) => {
        const jokePunlineString = JokePunchline(useJoke());
        jokePunchlineUI.innerHTML = jokePunlineString;
      });
    });
});
