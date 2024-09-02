var video = $('.card--recipe').hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
    $('.card--recipe').addClass('is--playing');
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('.card--recipe').removeClass('is--playing');
}