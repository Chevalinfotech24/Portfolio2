$(document).ready(function() {
    var cardWidth = $('.card--recipe').outerWidth(true);
    var currentIndex = 0;
    var cardCount = $('.card--recipe').length;

    function showCard(index) {
        var offset = -index * cardWidth;
        $('.card-wrapper').css('transform', 'translateX(' + offset + 'px)');
    }

    $('.next-button').click(function() {
        if (currentIndex < cardCount - 1) {
            currentIndex++;
            showCard(currentIndex);
        }
    });

    $('.prev-button').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            showCard(currentIndex);
        }
    });

    // Handle video play/pause on hover
    $('.card--recipe').hover(
        function() {
            $('video', this).get(0).play();
            $(this).addClass('is--playing');
        },
        function() {
            $('video', this).get(0).pause();
            $(this).removeClass('is--playing');
        }
    );
});