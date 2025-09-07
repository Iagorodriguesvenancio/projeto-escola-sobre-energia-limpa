const menuResponsivoButton = document.querySelector('.menuResponsivoButton');
const buttonClose = document.querySelector('.buttonClose');
const menuResponsivo = document.querySelector('.menuResponsivo');

menuResponsivoButton.addEventListener('click', () => {
    menuResponsivo.classList.add('active');
});

buttonClose.addEventListener('click', () => {
    menuResponsivo.classList.remove('active');
});