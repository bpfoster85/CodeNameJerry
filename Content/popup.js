$(function () {

    $("#moreinfosection").hide();
    $("#maincontent").toggle();
    $("#moreinfosection").toggle();
    $("#moreinfo").click(function () {
        SwitchView();

        if ($('#moreinfosection').is(":visible")) {
            GetReaccuringPaymentData();
        }

    });
    $("#fbshare").click(function () {
        alert("Share link to install chrome extension on facebook")
    });
    $("#tshare").click(function () {
        alert("Share link to install chrome extension on Twitter")
    });
    $("#donation-slider").on('input', function (event) {
        $("#stickDiv").html("");
        for (i = 0; i < event.currentTarget.value; i++) {
            $("#stickDiv").append('<img src="https://static.thenounproject.com/png/203593-200.png" width = "20px" height="20px"/>');
        }
    });
    $("#eshare").click(function () {
        alert("Share link to install chrome extension using email")
    });
    // $("#initdb").click(
    //     function () {
    //         SaveOneTimeDonation(123.00);
    //         GetAllDonations();
    //     });
    // $("#viewdata").click(function () {        
    //     GetAllDonations();
    // });
});

function SwitchView() {
    $("#maincontent").toggle();
    $("#moreinfosection").toggle();
    $('#donate').toggle();
}

function GetReaccuringPaymentData() {
    var results = [];
    var tableTemplate = [];

    chrome.storage.sync.get("DonationList", function (result) {
        result.
        $.each(results, function (i, d) {
            var dTemplate = "<tr><td></td><td></td><tr>";
            tableTemplate.push(dTemplate);
        });

        $("#reaccuringdatalayout").appendTo(tableTemplate.join(""));
    });
}


