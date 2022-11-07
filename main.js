function createGame(playe1, hora, playe2) {
  return `
  <li>
      <img src="./assets/icon-${playe1}.svg" alt="${playe1}">
      <strong>${hora}</strong>
      <img src="./assets/icon-${playe2}.svg" alt="${playe2}">
   </li>
  
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

        <ul>
          ${games}
        </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "quinta",
    createGame("suiça", "6:00", "cameroon") +
      createGame("korea", "9:00", "uruguay") +
      createGame("portugal", "12:00", "ghana") +
      createGame("brazil", "15:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "6:00", "serbia") +
      createGame("korea", "9:00", "ghana") +
      createGame("brazil", "12:00", "suiça") +
      createGame("portugal", "15:00", "uruguay") 
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("korea", "11:00", "portugal") +
      createGame("ghana", "11:00", "uruguay") +
      createGame("cameroon", "15:00", "brazil") +
      createGame("serbia", "15:00", "suiça") 
  )
 
