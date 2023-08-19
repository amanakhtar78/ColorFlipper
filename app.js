const color__pick = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const color = document.getElementById("col");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex = hex + color__pick[Math.floor(Math.random() * color__pick.length)];
  }
  document.body.style.backgroundColor = hex;
  color.innerText = hex;
});
