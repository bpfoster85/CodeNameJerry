function Donation(donType, amount) {
    this.DonationType = donType;
    this.Amount = amount;
}

function SaveOneTimeDonation(amt) {
    var don = new Donation(1, amt);
    console.log(don);
    this.MainSave(don);
}

function MainSave(donation) {
    var allDonations = GetAllDonations();
    allDonations.Donations.push(Donation);
    chrome.storage.sync.set({ "DonationList": allDonations }, function () {
        console.log(donations);
    });
}

function GetAllDonations() {
    var results;
    chrome.storage.sync.get("DonationList", function (result) {
        results = result;
    });
    return results;
}

