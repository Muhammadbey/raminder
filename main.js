const daysEl = document.getElementById("day_num");
const hoursEl = document.getElementById("hour_num");
const minutesEL = document.getElementById("minut_num");
const secondsEl = document.getElementById("second_num");
// const target = document.getElementsById("select_date");

const inputEl = document.getElementById("select_date");
var targetDate = 0;
let inputBin;

inputEl.addEventListener("input", (e) => {
  // const inputD = e.inputEl.value;
  inputBin = new Date(e.target.value);
});

function counter(e) {
  if (!inputBin) return;
  const date = new Date();
  const targetDate = inputBin.getTime();
  const currentTime = date.getTime();

  const remainingTimeMS = targetDate - currentTime;
  console.log(currentTime);
  let day = Math.floor(remainingTimeMS / (1000 * 60 * 60 * 24));
  daysEl.innerText = day < 10 ? "0" + day : day;
  let dayModule = remainingTimeMS % (1000 * 60 * 60 * 24);

  let hour = Math.floor(dayModule / (1000 * 60 * 60));
  hoursEl.innerText = hour < 10 ? "0" + hour : hour;
  let hourModule = dayModule % (1000 * 60 * 60);

  const minut = Math.floor(hourModule / (1000 * 60));
  minutesEL.innerText = minut < 10 ? "0" + minut : minut;
  let minutModule = hourModule % (1000 * 60);
  const second = Math.floor(minutModule / 1000);
  secondsEl.innerText = second < 10 ? "0" + second : second;
}
setInterval(() => {
  counter();
}, 1000);
