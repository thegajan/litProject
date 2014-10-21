$(document).ready(function () {
    $("#arrow").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
    $("#bib").click(function () {
        $("#bib-full").fadeIn('slow');
    });
    $("#close").click(function () {
        $("#bib-full").fadeOut('slow');
    });
});