//This function gets called when the extension is installed
chrome.runtime.onInstalled.addListener(function(state) {
    //Open the home page of the app when the app gets installed
    if(state.reason === "install") {
        chrome.tabs.create({
            "url": "https://github.com/deep4788/viewGitHubCommits",
            "active": true
        });
    }
});
