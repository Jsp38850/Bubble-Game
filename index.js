//On crée une Balise Span
const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  const size = Math.random() * 200 + 100;
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  // On dit au body qu'il a comme enfant bubble
  document.body.appendChild(bubble);

  bubble.classList.add("bubble");

  bubble.style.height = size + "px";
  bubble.style.width = size + "px";

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 800);
