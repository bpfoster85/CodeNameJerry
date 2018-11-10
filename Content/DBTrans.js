function Donation(donType, amount, date) {
    this.DonationType = donType;
    this.Amount = amount;
    this.DonationDate = date;
}

function SaveOneTimeDonation(amt, callBack) {
    var don = new Donation(1, amt, new Date());
    this.MainSave(don, callBack);
}
function SaveWeeklyDonation(amt, callBack) {
    var don = new Donation(2, amt, new Date());
    this.MainSave(don, callBack);
}
function SaveMonthlyDonation(amt, callBack) {
    var don = new Donation(3, amt, new Date());
    this.MainSave(don, callBack);
}
function MainSave(donation, callBack) {
    GetAllDonations(function (result) {
        result.DonationList.Donations.push(donation);
        chrome.storage.sync.set({ "DonationList": result.DonationList }, callBack);
    });
}

function GetAllDonations(callBack) {
    chrome.storage.sync.get("DonationList", function (result) {
        callBack(result);
    });
}

