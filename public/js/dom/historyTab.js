const modalButton = document.querySelector('#modal-button');
const modalButton2 = document.querySelector('#option-button');
const modal = document.querySelector('#modal');
const modal2 = document.querySelector('#modal2');
const closeButton = document.querySelector('.close');
const colse2 = document.querySelector('#close2');

const logoutButton = document.getElementById('logout');

modalButton2.addEventListener('click', () => {
  modal2.style.display = 'block';
});

modalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

colse2.addEventListener('click', () => {
  modal2.style.display = 'none';
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

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();
  fetch('/logout', {
    method: 'POST',
  });
});

fetch('/tasks').then((data) => data.json()).then((data) => addElement(data));