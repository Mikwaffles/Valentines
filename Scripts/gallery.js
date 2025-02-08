$(document).ready(function () {
    $(".post-img").click(function () {
        let imgSrc = $(this).attr("src");
        $("#modalImage").attr("src", imgSrc);
        $("#imageModal").addClass("show"); // Adds the 'show' class to display modal
    });

    $("#closeModal, #imageModal").click(function (e) {
        if (e.target.id === "closeModal" || e.target.id === "imageModal") {
            $("#imageModal").removeClass("show"); // Removes the 'show' class to hide modal
        }
    });
});
