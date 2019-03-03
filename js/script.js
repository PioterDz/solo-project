// MENU SHOW

function toggleMenu(visible) {
    document.querySelector('.menu').classList.toggle('show', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

// QUIT MODAL

var quitPageModal = document.getElementById('quitModal');
var openQuitPageModalButton = document.getElementById('quitBtn');
var escapeQuitPageModalButton = document.getElementById('quitModalBtn');

openQuitPageModalButton.addEventListener('click', function () {
    quitPageModal.style.display = "block";
})

escapeQuitPageModalButton.addEventListener('click', function () {
    quitPageModal.style.display = "none";
})

document.body.addEventListener('click', function(event) {
    if (event.target == quitPageModal) {
        quitPageModal.style.display = "none";
    }
})

// BANNERS MODAL 

var bannerModal = document.getElementById('bannerModal');
var openBannerModalBtn = document.getElementById('bannerModalBtn');
var close = document.getElementsByClassName('close')[0];

openBannerModalBtn.addEventListener('click', function () {
    console.log('banner banner');
    bannerModal.style.display = "block";
})

close.addEventListener('click', function () {
    bannerModal.style.display = "none";
})

document.body.addEventListener('click', function(event) {
    if (event.target == bannerModal) {
        bannerModal.style.display = "none";
    }
})

var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var chart = new Chart(ctx, {
    // 1
    type: 'bar',
    data: {
        // 2
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3
        datasets: [{
            // 4
            label: "Signups",
            // 5
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});