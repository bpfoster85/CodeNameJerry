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
    $("#donation-slider").onInput(function(event) {
        $("#stickDiv").html("");
        for (i = 0; i < event.path[0].value; i++) {
            $("#stickDiv").append('<img src="https://static.thenounproject.com/png/203593-200.png" width = "20px" height="20px"/>');
        }
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
