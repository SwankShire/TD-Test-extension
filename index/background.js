let ticketList = [];

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("Recived a message");
  if (msg == "need list") {
    sendResponse(ticketList);
  }
  else {
    //temp unity searchRepair is done
    ticketList = msg;
    sendResponse();
    searchRepair(msg);
    newwin = false;
  }


});

function searchRepair(msg){
  //need a loop to search every ticket num from the msg.
  //chrome.tabs.create({url: "https://techdefenders.repairq.io/"});
  //temp add stuff to get data
  //let d = document.getElementsByClassName('block-content');
  //let info = d[1].getElementsByClassName('pull-right');
  //let provider = info[0];
  //let claimNum = info[1];
  //let serialNum = info[2];

  batch()
}
let newwin = false;
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (newwin == true) {
    console.log("already made window");
  }
  else if(tab.url.indexOf("https://www.repairwatch.com/admin/view-accounts.php?msg=") > -1 &&
      changeInfo.url === undefined){
    chrome.tabs.create({url: "https://www.repairwatch.com/admin/view-client-shipments.php?autobatch"});
    newwin = true;

  }
});


function batch(){
  chrome.tabs.onCreated.addListener(function(tab){
      console.log("new tab "+tab.id);

  });
  console.log("background sent a message to batch.js");
  let win = chrome.tabs.create({url: "https://www.repairwatch.com/admin/view-accounts.php"});
  alert("pick an account");

  //chrome.tabs.executeScript(win,{file: 'batch.js'});
  chrome.extension.sendMessage(ticketList,function(response) {});


  //chrome.tabs.update({url:"https://www.repairwatch.com/admin/view-client-shipments.php"})


}
