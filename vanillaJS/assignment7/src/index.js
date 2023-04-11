const SETTING_KEY = "setting";
const GUESSING_KEY = "guessing";

const gameForm = document.querySelector("#game-form");
const inputSetNumber = gameForm.querySelector(".setting");
const inputGuessNumber = gameForm.querySelector(".guessing");
const machineNumber = gameForm.querySelector(".machine");
const outputNumber = gameForm.querySelector(".output");

const randomNumberGameHandler = {
  onInputNumber: (event) => {
    const setNumber = inputSetNumber.value;
    const guessNumber = inputGuessNumber.value;
    const getSetNumber = localStorage.getItem(SETTING_KEY);
    const getGuessNumber = localStorage.getItem(GUESSING_KEY);
    let getMachineNumber = Math.floor(Math.random() * getSetNumber);
    // let getMachineNumber = Math.floor(Math.random() * parseInt(getSetNumber));
    // wow..It works.
    // Math.random() * "79";

    inputGuessNumber.setAttribute("max", setNumber);

    event.preventDefault();

    if (parseInt(setNumber) >= parseInt(guessNumber)) {
      localStorage.setItem(SETTING_KEY, setNumber);
      localStorage.setItem(GUESSING_KEY, guessNumber);

      machineNumber.innerText = `You chose: ${getGuessNumber}, the machine chose: ${getMachineNumber}`;

      parseInt(getGuessNumber) === getMachineNumber
        ? (outputNumber.innerText = "You won!")
        : (outputNumber.innerText = "You lost!");
    }
  },
};

gameForm.addEventListener("submit", randomNumberGameHandler.onInputNumber);
