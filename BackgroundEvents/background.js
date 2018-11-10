
chrome.runtime.onInstalled.addListener(function () {
    InitializeDatabase();
});

function InitializeDatabase() {
    var AllDonations = {
        Donations: [
        ],
        ContactInfo: {
            FirstName: 'Bob',
            LastName: 'Fred'
        }
    }

    chrome.storage.sync.get("DonationList", function (result) {
        if (result === undefined) {
            chrome.storage.sync.set({ "DonationList": AllDonations }, function () { });
        }
    });

}