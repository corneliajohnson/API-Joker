const jokeBtn = document.querySelector(".request-joke-btn");
const punchlineBtn = document.querySelector(".get-joke-btn");
const jokeSetupUI = document.querySelector(".joke-setup");
const jokePunchlineUI = document.querySelector(".joke-punchline");

import {
  useJoke,
  getJoke,
  getProgrammingJoke,
  getKnockJoke,
} from "./JokeProvider.js";
import { JokeSetup, JokePunchline } from "./Joke.js";

const jokeDropdown = document.getElementById("joke-dropdown");
jokeDropdown.onchange = function () {
  jokeSetupUI.innerHTML = "";
  jokePunchlineUI.innerHTML = "";
  const jokeDropdownValue = document.getElementById("joke-dropdown").value;
  if (jokeDropdownValue === "programming") {
    ProgrammingJoke();
  } else if (jokeDropdownValue === "knock") {
    KnockJoke();
  }
};

const ProgrammingJoke = () => {
  jokeBtn.addEventListener("click", (e) => {
    // TODO: fetch a joke from the Joke API and render it to the DOM
    getProgrammingJoke()
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
};

const KnockJoke = () => {
  jokeBtn.addEventListener("click", (e) => {
    // TODO: fetch a joke from the Joke API and render it to the DOM
    getKnockJoke()
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
};
