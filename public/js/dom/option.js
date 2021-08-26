const timeContainer = document.querySelector('.time');
let globalVal = document.querySelector('.work-time-input').value;

const getTimeFromInput = () => {
  const worktime = document.querySelector('.work-time-input').value;
  const breaktime = document.querySelector('.break-time-input').value;
  return { worktime, breaktime };
};
const { worktime, breaktime } = Number(getTimeFromInput());

console.log(worktime);

// const requestToServer {
//     fetch()
// }

const showTimeInDom = () => {
  const { worktime, breaktime } = getTimeFromInput();

  timeContainer.textContent = `${worktime}:00`;
};
let interval;
const countDown = () => {
  globalVal = parseInt(globalVal, 10) || 25;
  // eslint-disable-next-line no-plusplus
  globalVal--;
  timeContainer.textContent = `${globalVal}:00`;
    console.log(globalVal);
  if (globalVal === 0) {
    clearInterval(interval);
  }
};

interval = setInterval(countDown, 60000);

document.querySelector('.start').onclick = () => {
  countDown();
};

document.querySelector('.form').addEventListener('submit', (e) => {
  showTimeInDom();
  e.preventDefault();
});
