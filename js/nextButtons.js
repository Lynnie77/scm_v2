
//Next BTNS For Carousel START
document.getElementById("prevBtn").addEventListener("click", () => {
  currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
  setCardPositions();
  stopRotation(); // optional
  isPaused = true;
  pauseBtn.textContent = "▶ Resume";
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentCardIndex = (currentCardIndex + 1) % totalCards;
  setCardPositions();
  stopRotation(); // optional
  isPaused = true;
  pauseBtn.textContent = "▶ Resume";
});

//Next BTNS For Carousel END


// PAUSE BUTTON START
// Pause Button Logic START
const pauseBtn = document.getElementById("pauseBtn");
let isPaused = false;

pauseBtn.addEventListener("click", () => {
  if (isPaused) {
    startRotation();
    pauseBtn.textContent = "⏸ Pause";
  } else {
    stopRotation();
    pauseBtn.textContent = "▶ Resume";
  }
  isPaused = !isPaused;
});
// Pause Button Logic END

//PAUSE BUTTON END