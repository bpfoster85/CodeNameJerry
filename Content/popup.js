$(function () {
    $('select').formSelect();
    $("#moreinfosection").hide();
    // $("#maincontent").toggle();
    // $("#moreinfosection").toggle();
    $("#moreinfo").click(function () {
        SwitchView();
        if ($('#moreinfosection').is(":visible")) {
            GetHistoryPaymentData();
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
        $("#donate").html('<i class="material-icons left">face</i>Donate $' + (event.currentTarget.value * 5).toFixed(2));
        for (i = 0; i < event.currentTarget.value; i++) {
            if(i %2 == 0){
                $("#stickDiv").append('<img src="http://icons-for-free.com/free-icons/png/512/570640.png" width = "35px" height="35px"/>');
            }else{
                $("#stickDiv").append('<img src="https://image.flaticon.com/icons/png/512/146/146010.png" width = "35px" height="35px"/>');
            }
            $("#kidsfed").text((i+1) + " kids get to eat because of you.");
        }
    });
    $("#eshare").click(function () {
        alert("Share link to install chrome extension using email")
    });
    $("#donate").click(function () {
        Donate();
    })

});
function Donate() {
    var kidCount = $("#donation-slider").val();
    var freq = $("#freq").val();
    var subtotal = kidCount * 5;
var date = new Date().getFullYear() + "/" + (new Date().getMonth()) + "/" + new Date().getDate();
    var don;
    if (freq == 1) {
        don = new Donation(1, subtotal,date);
    }
    else if (freq == 2) {
        don = new Donation(2, subtotal,date);
    }
    else {
        don = new Donation(3, subtotal, date);
    }

    chrome.storage.sync.get("DonationList", function (result) {
        result.DonationList.Donations.push(don);
        chrome.storage.sync.set({ "DonationList": result.DonationList }, function () {
            $("#donate").html('<i class="material-icons left">face</i>Donate!');
        });
    });
}
function SwitchView() {
    $("#maincontent").toggle();
    $("#moreinfosection").toggle();
    $('#donate').toggle();
}

function GetHistoryPaymentData() {
    var results = [];
    var tableTemplate = [];
    $("#historydatalayout").html('');
tableTemplate.push('<tr><td class="subtitle">Payment Type</td>'+
'<td class="subtitle">Amount</td><td class="subtitle">Donation Date</td></tr>');

    chrome.storage.sync.get("DonationList", function (result) {
        results = result.DonationList.Donations;
        console.log(results);
        $.each(results, function (i, d) {
            var pType;
            switch (d.DonationType) {
                case 1:
                pType = "One-Time";
                    break;
                case 2:
                pType = "Weekly";
                    break;
                case 3:
                pType = "Monthly";
                    break;
            }
            console.log(d);
            var dTemplate = "<tr><td>"+pType +"</td><td>$" 
            + d.Amount.toFixed(2) + "</td><td>" + d.DonationDate + "</td><tr>";
            tableTemplate.push(dTemplate);
        });
        $("#historydatalayout").append(tableTemplate.join(''));
    });
}