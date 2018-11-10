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
    $("#donation-slider").on("input", function(event) {
        console.log(event);
        $("#stickDiv").html("");
        for (i = 0; i < event.currentTarget.value; i++) {
            if(i %2 == 0){
                $("#stickDiv").append('<img src="http://icons-for-free.com/free-icons/png/512/570640.png" width = "40px" height="40px"/>');
            }else{
                $("#stickDiv").append('<img src="https://image.flaticon.com/icons/png/512/146/146010.png" width = "40px" height="40px"/>');
            }
        }
    });
    $("#eshare").click(function () {
        alert("Share link to install chrome extension using email")
    });
    $("#initdb").click(
        function () {
            SaveOneTimeDonation(123.00);
            GetAllDonations();
        });
    $("#viewdata").click(function () {        
        GetAllDonations();
    });
});

function SeeData() {
    alert(GetAllDonations());
}
