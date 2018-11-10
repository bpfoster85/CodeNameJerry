var url = window.location.href;
if (url.includes("checkout")) {
    setTimeout(() => {
        var moneyAmount = document.getElementsByClassName("ltrOverride")[0].innerText;
        // console.log(moneyAmount);
        // xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", chrome.runtime.getURL ("Views/overlay.html"), false );
        // xmlHttp.send( null );

        $.get(chrome.runtime.getURL('Views/overlay.html'), function (data) {
            var inject = document.createElement("div");
            inject.innerHTML = data;
            var totalMoneyDouble = moneyAmount.substring(moneyAmount.indexOf('$') + 1, moneyAmount.indexOf(' '));
            inject.querySelector("#totalSpent").innerText = totalMoneyDouble;
            var initialDonation = (100 - totalMoneyDouble.substring(totalMoneyDouble.indexOf('.') + 1)) * 0.01;
            inject.querySelector("#initialDonation").innerText = initialDonation;
            var initialFedStudents = Math.ceil(initialDonation / .50);
            inject.querySelector("#initialFedStudents").innerText = Math.ceil(initialDonation / .50);
            
            inject.querySelector("#donation-slider").value = initialFedStudents;

           
            document.body.insertBefore(inject, document.body.firstChild);

            inject.querySelector("#donation-slider").addEventListener("input", (event) => {
                console.log(event.path[0].value);
                $("#stickDiv").html("")
                for (i = 0; i < event.path[0].value; i++) {
                    $("#stickDiv").append('<img src="https://static.thenounproject.com/png/203593-200.png" width = "20px" height="20px"/>');
                }
                var donation = .50 * event.path[0].value;
                $('#initialDonation').text(donation.toFixed(2));
                $('#initialFedStudents').text(Math.ceil(donation / .50));
            });

            inject.querySelector("#payPalImg").addEventListener("click", (event) => {
                var amountDonated =  $('#initialDonation').text();
                var numChildrenFed = 90; // Add get from database
                var htmlStr = "<div>Thank you for your donation of $" + amountDonated + "!</div><div>The total Number of Children you have fed is: " + numChildrenFed + "</div>";
                $(".overlay-content").html(htmlStr);
            });
        });

    }, 1000);
}

else if (url == "https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1") {
    var amazonMoneyAmount = document.getElementsByClassName("grand-total-price")[0].innerText;
    console.log(amazonMoneyAmount);
}