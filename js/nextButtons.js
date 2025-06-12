
//Next BTNS For Carousel START
document.getElementById("prevBtn").addEventListener("click", () => {
  currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
  setCardPositions();
  stopRotation(); // optional
  isPaused = true;
  pauseBtn.textContent = "▶";
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentCardIndex = (currentCardIndex + 1) % totalCards;
  setCardPositions();
  stopRotation(); // optional
  isPaused = true;
  pauseBtn.textContent = "▶";
});
//Next BTNS For Carousel END


// PAUSE BUTTON START
const pauseBtn = document.getElementById("pauseBtn");
let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    startRotation();
    pauseBtn.textContent = "⏸";
  } else {
    stopRotation();
    pauseBtn.textContent = "▶";
  }
  isPaused = !isPaused;
});

//PAUSE BUTTON END