$(document).ready(function () {
    function revealMemories() {
        $(".memory").each(function () {
            let position = $(this).offset().top;
            let scrollPosition = $(window).scrollTop() + $(window).height() - 100;

            if (scrollPosition > position) {
                $(this).addClass("show");
            }
        });
    }

    $(window).on("scroll", revealMemories);
    revealMemories();
});

