(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('.parallax').parallax();

        $('.dropdown-button').dropdown({
            hover: true, // activate on hover
        });


        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        var items = document.querySelectorAll(".timeline li");

        // code for the isElementInViewport function

        function callbackFunc() {
            for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                }
            }
        }

        window.addEventListener("load", callbackFunc);
        window.addEventListener("scroll", callbackFunc);

    }); // end of document ready


})(jQuery); // end of jQuery name space