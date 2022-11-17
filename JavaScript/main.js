let info = document.querySelector("#name");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

let dayInfo = document.querySelector("#date");
dayInfo.innerHTML = day;

let time = document.querySelector("#time");
time.innerHTML = d.toLocaleTimeString();

let input = prompt("İsminizi Giriniz: ")


info.innerHTML = input;