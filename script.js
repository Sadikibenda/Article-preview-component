const share = document.getElementById('share');
const popup = document.getElementById('popup');

share.addEventListener('click', () => {
    popup.style.display = 'flex';
});

if(window.innerWidth < 768) {
    share.addEventListener('click', () => {
        popup.style.display = 'flex';  // input for mobile
    });
}