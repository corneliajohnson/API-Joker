let joke;

// 1. define and export a useJoke function that simply returns the joke object.
export const useJoke = () => {
  return joke;
};

//         Advanced: find a way to return a copy of the joke object (tip: .slice will not work)
// 2. define and export a getJoke function that fetches a joke from the API and sets the joke variable to the response

export const getJoke = () => {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => (joke = data));
};

export const getProgrammingJoke = () => {
  return fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((response) => response.json())
    .then((data) => (joke = data[0]));
};

export const getKnockJoke = () => {
  return fetch("https://official-joke-api.appspot.com/jokes/knock-knock/random")
    .then((response) => response.json())
    .then((data) => (joke = data[0]));
};
