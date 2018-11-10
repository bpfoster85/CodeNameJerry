$(function () {
    $("#moreinfosection").hide();
    $("#maincontent").toggle();
    $("#moreinfosection").toggle();
    $("#moreinfo").click(function () {
        $("#maincontent").toggle();
        $("#moreinfosection").toggle();
    });
    $("#fbshare").click(function () {
        alert("Share link to install chrome extension on facebook")
    });
    $("#tshare").click(function () {
        alert("Share link to install chrome extension on Twitter")
    });
    $("#eshare").click(function () {
        alert("Share link to install chrome extension using email")
    });
    $("#initdb").click();
    $("#viewdata").click(function () {
        SeeData();
    });
});

function SeeData() {
    alert(GetAllDonations());
}