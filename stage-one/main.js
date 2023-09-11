const day = document.getElementById("today");
const time = document.getElementById("time");
const currentDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day.textContent = days[currentDate.getDay()];
time.textContent = currentDate.getTime() + " milliseconds";
