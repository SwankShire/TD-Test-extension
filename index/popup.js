
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("alertButton").addEventListener("click", listToBackground);
  document.getElementById("tb").addEventListener("keypress", checkForEnter);

});


let ticketList = [];
function checkForEnter(){
  if (event.keyCode == 13) {
    console.log("enter was pressed");
    checkTextbox();
  }
};
function checkTextbox(){
  console.log("checkTextbox ran");

    let tb = document.getElementById("tb");
    let p = document.getElementById("alreadyBatched");
    console.log(tb.value);

    p.innerHTML += tb.value + ", ";
    ticketList.push(tb.value);
    tb.value = "";
    console.log("ticketList values " + ticketList);
};
function listToBackground(){
  chrome.extension.sendMessage(ticketList,function(response) {});
  console.log("sent ticketList to background script");
}
