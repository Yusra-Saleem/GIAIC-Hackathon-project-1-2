document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleBtn');
  const hiddenSkills = document.getElementById('hiddenSkills');

  console.log('Toggle Button:', toggleBtn);
  console.log('Hidden Skills:', hiddenSkills);

  if (toggleBtn && hiddenSkills) {
    toggleBtn.addEventListener('click', () => {
      console.log('Button Clicked');
      hiddenSkills.classList.toggle('active');
    });
  } else {
    console.error("Elements not found");
  }
});
