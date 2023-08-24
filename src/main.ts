const cardMsgEl = document.getElementById("card-msg") as HTMLParagraphElement;
const cardBtnEl = document.getElementById("card-btn") as HTMLButtonElement;

async function writeCardMessage() {
  cardMsgEl.textContent = await getRandomCardMessage();
}

async function getRandomCardMessage() {
  const resp = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data: {
    id: string;
    joke: string;
    status: number;
  } = await resp.json();

  return data.joke;
}

writeCardMessage();

cardBtnEl.addEventListener("click", writeCardMessage);
