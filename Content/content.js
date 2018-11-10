var url = window.location.href;
if (url.includes("checkout")) {
    setTimeout(() => {
        var moneyAmount = document.getElementsByClassName("ltrOverride")[0].innerText;
        // console.log(moneyAmount);
        // xmlHttp = new XMLHttpRequest();
        // xmlHttp.open( "GET", chrome.runtime.getURL ("Views/overlay.html"), false );
        // xmlHttp.send( null );
        
        $.get(chrome.runtime.getURL('Views/overlay.html'), function(data) {
            var inject  = document.createElement("div");
            inject.innerHTML = data;
            var totalMoneyDouble = moneyAmount.substring(moneyAmount.indexOf('$') + 1, moneyAmount.indexOf(' '));
            inject.querySelector("#totalSpent").innerText = totalMoneyDouble;
            var initialDonation =  (100 - totalMoneyDouble.substring(totalMoneyDouble.indexOf('.') + 1)) * 0.01;
            inject.querySelector("#initialDonation").innerText = initialDonation;
            inject.querySelector("#initialFedStudents").innerText = Math.ceil(initialDonation / .50);
            document.body.insertBefore (inject, document.body.firstChild);
        });
       
    }, 1000);
}

else if (url == "https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1") {
    var amazonMoneyAmount = document.getElementsByClassName("grand-total-price")[0].innerText;
    console.log(amazonMoneyAmount);
}