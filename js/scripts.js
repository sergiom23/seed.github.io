$(document).ready(function () {
    var img_array = [0, 1, 2, 3, 4, 5],
        newIndex = 0,
        index = 0,
        interval = 15000;
    (function changeBg() {

        //  --------------------------
        //  For random image rotation:
        //  --------------------------

            //  newIndex = Math.floor(Math.random() * 10) % img_array.length;
            //  index = (newIndex === index) ? newIndex -1 : newIndex;

        //  ------------------------------
        //  For sequential image rotation:
        //  ------------------------------

            index = (index + 1) % img_array.length;

        $('.intro-header').css('background', function () {
            $('.intro-header').animate({
                backgroundColor: 'transparent'
            }, 1000, function () {
                setTimeout(function () {
                    $('.intro-header').animate({
                        backgroundColor: 'rgb(49,181,139)'
                    }, 1000);
                }, 3000);
            });
            return 'url(/img/bg' + img_array[index] + '.jpg)';
        });
        setTimeout(changeBg, interval);
    })();
});