
const page =document.querySelector ('.page');

page.addEventListener('click', onClick);

function onClick (e){
  e.preventDefault();
  page.classList.toggle('miraj')
}
