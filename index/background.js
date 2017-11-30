let ticketList = [];
let counter = 0
let claimList = [];
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("Recived a message that says",msg);
  if (msg == "need Ticket") {
    sendResponse(ticketList[counter]);
    console.log(ticketList[counter]);
    counter++;
  }
  else if (msg.includes("claim")) {
    claimList.push(msg.substr(5));
    console.log("claimList ",claimList);
  }
  else if (msg == "need list") {
    sendResponse(claimList);
    console.log("sent off claimList:",claimList);
    claimList = [];
  }
  else {
    //temp unity searchRepair is done
    ticketList = msg;
    sendResponse();
    searchRepair(msg);
    newwin = false;
    i = 0;
  }


});

function searchRepair(msg){


  for (var b = 0; b < msg.length; b++) {
    let win = chrome.tabs.create({url: "https://techdefenders.repairq.io/Ticket/" + msg[b]});
    //let link = "https://techdefenders.repairq.io/Ticket/" + msg[b];
    //chrome.tabs.update(win,{url: link});
    chrome.tabs.executeScript(win,{file: 'TicketToClaim.js'});
    console.log("ran TTC");
  }




  console.log("batching")
  batch();

}
let newwin = false;
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
  if (newwin == true) {
    console.log("already made window");
  }
  else if(tab.url.indexOf("https://www.repairwatch.com/admin/view-accounts.php?msg=") > -1 &&
      changeInfo.url === undefined){
    let win = chrome.tabs.create({url: "https://www.repairwatch.com/admin/view-client-shipments.php?autobatch"});
    newwin = true;
    chrome.tabs.executeScript(win,{file: 'batch.js'});

    console.log("background sent a message to batch.js");
    counter = 0;
//chrome.extension.sendMessage(ticketList,function(response) {});

  }
});


function batch(){

  let win = chrome.tabs.create({url: "https://www.repairwatch.com/admin/view-accounts.php"});
  alert("pick an account");



  //chrome.tabs.update({url:"https://www.repairwatch.com/admin/view-client-shipments.php"})


}
