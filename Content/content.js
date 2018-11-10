var url = window.location.href;
if (url.includes("checkout")) {
    setTimeout(() => {
        var moneyAmount = document.getElementsByClassName("ltrOverride")[0].innerText;
        console.log(moneyAmount);
        xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", chrome.runtime.getURL ("Views/overlay.html"), false );
        xmlHttp.send( null );
        
        var inject  = document.createElement("div");
        inject.innerHTML = xmlHttp.responseText;
        inject.querySelector("#totalSpent").innerText = moneyAmount;
        document.body.insertBefore (inject, document.body.firstChild);
    }, 1000);
}

else if (url == "https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1") {
    var amazonMoneyAmount = document.getElementsByClassName("grand-total-price")[0].innerText;
    console.log(amazonMoneyAmount);
}