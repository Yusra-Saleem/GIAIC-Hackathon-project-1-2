// Get references to the toggle button and container
var toggleBtn = document.getElementById('toggleBtn');
var container = document.getElementById('container');
if (toggleBtn && container) {
    // Add an event listener to the toggle button
    toggleBtn.addEventListener('click', function () {
        // Toggle the 'active' class on the container element
        container.classList.toggle('active');
    });
}
else {
    console.error("Elements not found");
}
