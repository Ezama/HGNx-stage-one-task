const day = document.getElementById("today");
const time = document.getElementById("time");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function updateTime() {
  const currentDate = new Date();
  day.textContent = days[currentDate.getDay()];
  time.textContent = currentDate.getTime() + " milliseconds";
}

updateTime();

setInterval(updateTime, 1000);




