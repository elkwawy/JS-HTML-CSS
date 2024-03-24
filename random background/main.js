let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorparts = [];

for (let i = 0; i < 6; i++) {
  colorparts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}
let finalColor = `#${colorparts.join("")}`;
console.log(finalColor);
document.body.style.backgroundColor = finalColor;
