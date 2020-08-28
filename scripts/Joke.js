// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string

export const JokeSetup = (jokeObj) => {
  return `<p>Joke No ${jokeObj.id}: ${jokeObj.setup}</p>`;
};
export const JokePunchline = (jokeObj) => {
  return `<p>Joke No ${jokeObj.id}: ${jokeObj.punchline}</p>`;
};
