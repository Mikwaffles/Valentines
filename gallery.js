$(document).ready(function () {
    $(".post-img").click(function () {
        let imgSrc = $(this).attr("src");
        $("#modalImage").attr("src", imgSrc);
        $("#imageModal").fadeIn();
    });

    $("#closeModal, #imageModal").click(function (e) {
        if (e.target.id === "closeModal" || e.target.id === "imageModal") {
            $("#imageModal").fadeOut();
        }
    });
});
