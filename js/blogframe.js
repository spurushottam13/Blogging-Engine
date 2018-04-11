
var elementPosition = $('#x_menu').offset();
$(window).scroll(function () {
    if ($(window).scrollTop() > elementPosition.top) {
                $('#x_menu').css('position', 'fixed').css('top', '0');

            } else {
                $('#x_menu').css('position', 'absolute');
                $('#x_menu').css('top', '12%');
                $('#x_menu').css('right', '0%');
                $('#x_menu').css('height', '500px');
            }
         });

console.log("blogframe");