chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("Recived a message");
  sendResponse();
  searchRepair();
});

function searchRepair(){
  chrome.tabs.create({url: "https://techdefenders.repairq.io/"});
  //temp remove later
  pickAccount()
}

function pickAccount(){
  let win = chrome.tabs.create({url: "https://www.repairwatch.com/admin/view-accounts.php"});

  chrome.webRequest.onCompleted.addListener( function(details){
    console.log(details);





    setTimeout(function(){


      let inputList = document.getElementsByClassName("form-control")[0].options.selectedIndex = 3;}, 3000);


    let account = window.prompt("Enter account name");
    let accountList = [];
    console.log("test");
    accountList = document.getElementsByClassName("sorting_1");
    for (var i = 0; i < accountList.length; i++) {
      let name = accountList[i].innerHTML;
      console.log(name);
      if (name.inculdes(account)) {
        let daddy = [];
        daddy = accountList[i].parentNode;
        daddy.getElementsByTagName("a");
        daddy[0].click();
      }
    }
  },{urls: ["*://www.repairwatch.com/*"]});
}
