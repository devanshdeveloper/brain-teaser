const colors = [
  "yellow",
  "red",
  "green",
  "blue",
  "brown",
  "black",
  "purple",
  "orange",
];
let maxNumberOfSpans = 200
const container = document.querySelector(".container");
const numberInput = document.querySelector("#numberInput");

const random = (range) => {
  return Math.floor(Math.random() * range);
};

const generateSpans = (numberOfSpans) => {
  if (numberOfSpans <= maxNumberOfSpans) {
    container.innerHTML = "";
    for (let i = 0; i < numberOfSpans; i++) {
      container.appendChild(document.createElement("span"));
    }
    document.querySelectorAll(".container span").forEach((span) => {
      span.innerHTML = colors[random(colors.length)];
      span.style.color = colors[random(colors.length)];
    });
  } else {
    numberInput.value = maxNumberOfSpans.toString();
    generateSpans(+numberInput.value);
  }
};

numberInput.addEventListener("input", (e) => {
  generateSpans(+e.target.value);
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  generateSpans(+numberInput.value);
});

generateSpans(+numberInput.value);
