
chrome.extension.sendMessage("need Ticket",function(response) {

  getClaims(response);
});

getClaims = (response) => {
  let temp = response;
  console.log(temp);

  let d = document.getElementsByClassName('block-content');
  let info = d[1].getElementsByClassName('pull-right');

  let provider = info[0];
  let claim = info[1];
  let serialNum = info[2];

  let claimNum = "claim" + info[1];

  chrome.extension.sendMessage(claimNum,function(response) {


  });
}
