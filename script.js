document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var hiddenSkills = document.getElementById('hiddenSkills');
    console.log('Toggle Button:', toggleBtn);
    console.log('Hidden Skills:', hiddenSkills);
    if (toggleBtn && hiddenSkills) {
        toggleBtn.addEventListener('click', function () {
            console.log('Button Clicked');
            hiddenSkills.classList.toggle('active');
        });
    }
    else {
        console.error("Elements not found");
    }
});
