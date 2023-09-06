document.addEventListener("DOMContentLoaded", function () {
    const staffSyncButton = document.getElementById("staff-sync-btn");

    const menuToggle = document.getElementById('menu_toggle');
      const menuItems = document.querySelector('.menu_items');

      menuToggle.addEventListener('click', function() {
        menuItems.classList.toggle('show');
      });
    
    staffSyncButton.addEventListener("click", () => {
      window.location.href = "login.html"; // Replace with the correct filename
    });
    
  });