var url = window.location.href;
if (url.includes("checkout")) {
    setTimeout(() => {
        var moneyAmount = document.getElementsByClassName("ltrOverride")[0].innerText;
        console.log(moneyAmount);
    }, 1000);   
}

else if (url == "https://www.amazon.com/gp/buy/spc/handlers/display.html?hasWorkingJavascript=1") {
    var amazonMoneyAmount = document.getElementsByClassName("grand-total-price")[0].innerText;
    console.log(amazonMoneyAmount);
}