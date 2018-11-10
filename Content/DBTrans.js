function Donation(donType, amount, date) {
    this.DonationType = donType;
    this.Amount = amount;
    this.DonationDate = date;
}

function SaveOneTimeDonation(amt) {
    var don = new Donation(1, amt, new Date());
    this.MainSave(don);
}
function SaveWeeklyDonation(amt) {
    var don = new Donation(2, amt, new Date());
    this.MainSave(don);
}
function SaveMonthlyDonation(amt) {
    var don = new Donation(3, amt, new Date());
    this.MainSave(don);
}
function MainSave(donation) {
    chrome.storage.sync.get("DonationList", function (result) {        
        result.DonationList.Donations.push(donation);
    chrome.storage.sync.set({ "DonationList": result.DonationList }, function () {
        console.log(result.DonationList );
    });
});    
}
function GetAllDonations() {    
    chrome.storage.sync.get("DonationList", function (result) {
        console.log(result);
    return result;
    });    
}

