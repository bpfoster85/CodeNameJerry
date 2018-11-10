$(function () {
<<<<<<< HEAD
    $("#changeme").html('world');
    
    $('.dropdown-trigger').dropdown();
});
=======
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
>>>>>>> 505ce924cc1684e619ae6d9459ba162f10582034
