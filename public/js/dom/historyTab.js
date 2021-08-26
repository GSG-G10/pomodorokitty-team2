const modalButton = document.querySelector('#modal-button');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.close');

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
const addElement = (data) => {
  const histortDiv = document.querySelector('.history');
  data.forEach((ele) => {
    const historyTask = document.createElement('div');
    historyTask.classList.add('old-task');
    historyTask.textContent = ele.name;
    histortDiv.appendChild(historyTask);
  });
};

fetch('/tasks').then((data) => data.json()).then((data) => addElement(data));