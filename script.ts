// Get references to the toggle button and container
const toggleBtn = document.getElementById('toggleBtn') as HTMLElement | null;
const container = document.getElementById('container') as HTMLElement | null;

if (toggleBtn && container) {
  // Add an event listener to the toggle button
  toggleBtn.addEventListener('click', function () {
    // Toggle the 'active' class on the container element
    container.classList.toggle('active');
  });
} else {
  console.error("Elements not found");
}
  