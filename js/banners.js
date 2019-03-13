// BANNERS MODAL 

var bannerModal = document.getElementById('banner-modal-id');
var openBannerModalBtn = document.getElementById('upper-banner-modal-open-btn');
var quitBannerModalSpan = document.getElementById('quit-banner-modal');

if (openBannerModalBtn) {
    openBannerModalBtn.addEventListener('click', function () {
        console.log('banner banner');
        bannerModal.style.display = "block";
});
}
if (quitBannerModalSpan) {
    quitBannerModalSpan.addEventListener('click', function () {
        bannerModal.style.display = "none";
});
}

document.body.addEventListener('click', function(event) {
    if (event.target == bannerModal) {
        bannerModal.style.display = "none";
    }
});