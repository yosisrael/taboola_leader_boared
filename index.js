const leaderBoard = document.getElementById("leaderBoard");

leaderBoardData
  .sort((a, b) => b.sum - a.sum)
  .forEach((data, index) => {
    const card = createCard(data, index);
    leaderBoard.appendChild(card);
  });
//

function createCard(data, index) {
  const card = document.createElement("div");
  const email_address = data.email_address;
  const name = getName(email_address);
  const imageSrc = getImageSrc(data.email_address);
  const place = index + 1;
  const score = data.sum;
  card.classList.add("card", "card-item", "p-1");
  card.innerHTML = `
        <div class="row g-0">
        <div class="col-md-2 text-secondary align-self-center card-index">
        <h1>${place}</h1>
        </div>
        <div class="col-md-3 align-self-center">
        <img
            src="./assets/images/${imageSrc}.jpeg"
            class="img-fluid rounded-start"
            alt="..."
            width="75"
            height="80"
        />
        </div>
        <div class="col-md-7">
        <div class="card-body">
            <h5 class="card-title text-primary">${name}</h5>
            <p class="card-text text-secondary">${score}</p>
        </div>
        </div>
    </div>
    `;
  return card;
}

function getName(email) {
  const src = getImageSrc(email);
  return src
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getImageSrc(email) {
  if (email.length > 1) {
    let name = email.split("@")[0];
    return name.replace(".", "_");
  }

  return "";
}
