const API_URL = "https://api.adviceslip.com/advice";
const adviceText = document.querySelector(".advice-text");
const adviceNumber = document.querySelector("#advice-number");
const diceContainer = document.querySelector(".dice-container");

function fetchAdvice() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      const { advice, id } = json.slip;
      adviceText.textContent = `"${advice}"`;
      adviceNumber.textContent = id;
    });
}

fetchAdvice();

diceContainer.addEventListener("click", () => {
  fetchAdvice();
});
