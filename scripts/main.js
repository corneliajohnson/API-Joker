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
  } else if (jokeDropdownValue === "general") {
    GeneralJoke();
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
        //breakUpKnock(useJoke());
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

const GeneralJoke = () => {
  jokeBtn.addEventListener("click", (e) => {
    // TODO: fetch a joke from the Joke API and render it to the DOM
    getJoke()
      .then(() => {
        const jokeStingObj = JokeSetup(useJoke());
        //breakUpKnock(useJoke());
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

// const breakUpKnock = (obj) => {
//   const knockArr = [];
//   knockArr.push(obj.setup.match(/[^\.!\?]+[\.!\?]+/g));
//   jokeSetupUI.innerHTML = knockArr[0][0];
//   jokeSetupUI.innerHTML += `<div><button id="who-there">${knockArr[0][1]}</button></div>`;

//   document.getElementById("who-there").addEventListener("click", () => {
//     jokeSetupUI.innerHTML += `<p>${knockArr[0][2]}</p>`;
//     jokeSetupUI.innerHTML += `<button id="who">${knockArr[0][3]}</button>`;
//   });
//   // const whoBtn = document.getElementById("who");
//   // whoBtn.onclick = function () {
//   //   console.log("hi");
//   // };
// };
