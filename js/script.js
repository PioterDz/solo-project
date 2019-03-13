// MENU SHOW

function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('change-height');
}
function toggleMarginTopForMain() {
    document.querySelector('main').classList.toggle('change-top-margin');
}
function togglePaddingLeftForContainer() {
    document.querySelector('.container-fluid').classList.toggle('change-left-padding');
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    toggleSidebar();
    togglePaddingLeftForContainer();
    toggleMarginTopForMain();
});

// QUIT MODAL

var quitPageModal = document.getElementById('quitModal');
var openQuitPageModalButton = document.getElementById('quitBtn');
var escapeQuitPageModalButton = document.getElementById('quitModalBtn');

openQuitPageModalButton.addEventListener('click', function () {
    quitPageModal.style.display = "block";
});

escapeQuitPageModalButton.addEventListener('click', function () {
    quitPageModal.style.display = "none";
});

document.body.addEventListener('click', function(event) {
    if (event.target == quitPageModal) {
        quitPageModal.style.display = "none";
    }
});

