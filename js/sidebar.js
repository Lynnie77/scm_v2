// Sidebar toggle functionality
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggleSidebar');


// Sidebar links go to specific card & close sidebar (optional)
document.querySelectorAll('.sidebar-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href').replace('#', '');
    const targetCard = document.getElementById(targetId);
    if (!targetCard) return;

    const index = Array.from(cards).indexOf(targetCard);
    if (index !== -1) {
      currentCardIndex = index;
      setCardPositions();
      stopRotation();
    }

    // Optional: collapse sidebar when a link is clicked
    sidebar.classList.remove('open');
  });
});
