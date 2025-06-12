// Sidebar open/close
const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');

openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeSidebarBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});



//Goes To CARD from Sidebar START
document.querySelectorAll('.sidebar-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').replace('#', '');
    const targetCard = document.getElementById(targetId);

    if (!targetCard) return;

    const index = Array.from(cards).indexOf(targetCard);
    if (index !== -1) {
      currentCardIndex = index;
      setCardPositions(); // Key to fixing the stacking issue
      stopRotation();     // Optional: pause auto-rotation
    }

    // Close sidebar
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open');
  });
});
//Goes To CARD from Sidebar END