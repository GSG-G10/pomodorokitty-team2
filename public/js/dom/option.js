const timeContainer = document.querySelector(".time")
const getTimeFromInput = () => {
    const worktime = document.querySelector(".work-time-input").value;
    const breaktime = document.querySelector(".break-time-input").value;
    return { worktime, breaktime };
}
let { worktime, breaktime } = Number(getTimeFromInput());

console.log(worktime);



// const requestToServer {
//     fetch()
// }

const showTimeInDom = () => {
    const { worktime, breaktime } = getTimeFromInput();

    timeContainer.textContent = `${worktime}:00`;

}

const countDown = () => {
    value = value--;
    timeContainer.textContent = `${value}:00`;
    console.log(value);
}

document.querySelector(".start").onclick = () => {
    countDown(document.querySelector(".work-time-input").value);
}
setInterval(countDown, 60000);

document.querySelector(".form").addEventListener("submit", (e) => {
    showTimeInDom();
    e.preventDefault();
});