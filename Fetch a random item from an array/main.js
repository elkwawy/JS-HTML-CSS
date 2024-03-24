// Fetch a random item from an array
let arr = ["Ahmed","Zayed","ashraf","Elshahaby","Foad","Mostafa","Ammer","Baraket","AMK","Zain","Elkwawy"];

let item = arr[Math.floor(Math.random() * arr.length)];

document.getElementById("item").innerHTML = item;
document.getElementById("item").style.cssText = "color:red; display:flex; justify-content:center; align-items:center; height:90vh; font-size: 50px; font-weight: bold; font-family: 'Roboto', sans-serif; text-transform: uppercase; letter-spacing: 2px; text-shadow: 0 0 10px #000;  ";
