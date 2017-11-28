
console.log("batch ran");
chrome.extension.sendMessage("need list",function(response) {

  makeShipment(response);
});




function makeShipment(response){
  let ticketList = response;
  let cb = document.getElementsByClassName('ckbx_ship');
  console.log("batching", cb);

  for (var i = 0; i < ticketList.length; i++) {
    let batched = false;
    for (var a = 0; a < cb.length; a++) {
      if (cb[a].value == ticketList[i]) {
        console.log("batching", cb[a].value);
        batched = true;
        cb[a].click();
      }
    }
    if (batched = false) {
      alert(ticketList[i]," was not batched");
    }
  }

  document.getElementById('submitBatch').click();

}
