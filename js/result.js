const getResultBtnRef = document.querySelector(".call");
const containerRef = document.querySelector(".response");
getResultBtnRef.addEventListener("click", getResult);

countdown(10);

function getResult() {
  fetch("https://swapi.dev/api/people/1/ ")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      const markup = createResponseMarkup(data);
      containerRef.insertAdjacentHTML("afterbegin", markup);
    })
    .catch((error) => {
      console.log(error);
    });
}

function createResponseMarkup(data) {
  const responseMarkup = `
    <h3>Результат</h3>
    <p>Имя: ${data.name}</p>
    <p>Пол: ${data.gender}</p>
    <p>Год рождения: ${data.birth_year}</p>
    <p>Рост: ${data.height}</p>
    <p>Вес: ${data.mass}</p>
    <p>Цвет глаз: ${data.eye_color}</p>
    <p>Цвет волос: ${data.hair_color}</p>`;

  return responseMarkup;
}

function countdown(minutes) {
  let seconds = 60;
  let mins = minutes;
  function tick() {
    const counter = document.querySelector(".timer");
    const current_minutes = mins - 1;
    seconds--;
    counter.innerHTML = `${current_minutes.toString()} :
      ${seconds < 10 ? "0" : ""}${seconds.toString()}`;

    if (seconds > 0) {
      seconds;
      setTimeout(tick, 1000);
    } else {
      if (mins > 1) {
        countdown(mins - 1);
      }
    }
  }
  tick();
}
