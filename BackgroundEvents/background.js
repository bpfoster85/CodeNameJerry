
chrome.runtime.onInstalled.addListener(function() {
console.log('woot');
});
chrome.browserAction.onClicked.addListener(function(tab) {
//  openOrFocusOptionsPage();
});



/************FUCTIONS************************* */
function openOrFocusOptionsPage() {
   var optionsUrl = chrome.extension.getURL('Views/options.html'); 
   chrome.tabs.query({}, function(extensionTabs) {
      var found = false;
      for (var i=0; i < extensionTabs.length; i++) {
         if (optionsUrl == extensionTabs[i].url) {
            found = true;
            console.log("tab id: " + extensionTabs[i].id);
            chrome.tabs.update(extensionTabs[i].id, {"selected": true});
         }
      }
      if (found == false) {
          chrome.tabs.create({url: "Views/options.html"});
      }
   });
}