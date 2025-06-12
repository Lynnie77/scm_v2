document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("nav-active");
  document.getElementById("hamburger").classList.toggle("active");


//Nav Hamburger btn stop carousel on specific card START
// Hook nav links to rotate the carousel to the correct card
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default jump behavior

    const targetId = link.getAttribute('href').replace('#', '');
    const targetCard = document.getElementById(targetId);

    if (!targetCard) return;

    const index = Array.from(cards).indexOf(targetCard);
    if (index !== -1) {
      currentCardIndex = index;
      setCardPositions();
      stopRotation(); // optional: stop auto-rotation on click
    }

    // Optional: close hamburger menu after clicking (if you have that behavior)
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('open'); // If you're toggling a class
  });
});
//Nav Hamburger btn stop carousel on specific card END

});