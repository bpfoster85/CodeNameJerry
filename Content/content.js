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
            inject.classList.add("overlay-root");
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
                    if(i %2 == 0){
                        $("#stickDiv").append('<img src="https://cdn2.iconfinder.com/data/icons/little-girl/512/little_girl_grey.png" width = "25px" height="25px"/>');
                    }else{
                        $("#stickDiv").append('<img src="https://image.flaticon.com/icons/png/512/146/146010.png" width = "25px" height="25px"/>');
                    }
                }
                var donation = .50 * event.path[0].value;
                $('#initialDonation').text(donation.toFixed(2));
                $('#initialFedStudents').text(Math.ceil(donation / .50));
            });

            inject.querySelector("#payPalImg").addEventListener("click", (event) => donateButtonClick(event));

            inject.querySelector("#close").addEventListener("click", (event) => {
                $(".overlay-root").remove();
                console.log("SUP")
            });
        });

    }, 1000);
}

else if (url == "https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1") {
    var amazonMoneyAmount = document.getElementsByClassName("grand-total-price")[0].innerText;
    console.log(amazonMoneyAmount);
}


function donateButtonClick(event) {
    var amountDonated = $('#initialDonation').text();
    SaveOneTimeDonation(amountDonated, function () {
        GetAllDonations(function (result) {
            console.log(result);
            var donations = result.DonationList.Donations;
            var totalChildenFed = 0;
            for (var i = 0; i < donations.length; i++) {
                totalChildenFed += donations[i].Amount;
            }
            totalChildrenFed = Math.ceil(totalChildenFed / .50);
            var htmlStr = "<div>Thank you for your donation of $" + amountDonated + "!</div><div>The total Number of Children you have fed is: " + totalChildrenFed + "</div>";
            $(".overlay-content").html(htmlStr);
        })
    });
}

