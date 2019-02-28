// MENU SHOW

function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

// QUIT MODAL

var quitModal = document.getElementById('quitModal');
var quitBtn = document.getElementById('quitBtn');
var quitModalBtn = document.getElementById('quitModalBtn');

quitBtn.onclick = function () {
    quitModal.style.display = "block";
}

quitModalBtn.onclick = function () {
    quitModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == quitModal) {
        quitModal.style.display = "none";
    }
}

// BANNERS MODAL 

var bannerModal = document.getElementById('bannerModal');
var bannerBtn = document.getElementById('banner-modal-btn');
var close = document.getElementsByClassName('close')[0];

bannerBtn.onclick = function () {
    bannerModal.style.display = "block";
}

close.onclick = function () {
    bannerModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == bannerModal) {
        bannerModal.style.display = "none";
    }
}