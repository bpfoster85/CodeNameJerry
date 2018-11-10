
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
    chrome.storage.sync.set({ 'DonationList': AllDonations }, function () {});

}