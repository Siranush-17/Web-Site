const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

 function emailSave() {
  const inputEmail = document.querySelector('.inputEmail').value;
  console.log(inputEmail);

}



