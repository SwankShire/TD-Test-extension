
console.log("batch.js ran");
chrome.extension.sendMessage("need list",function(response) {

  makeShipment(response);
});




function makeShipment(response){
  let claimList = response;
  let cb = document.getElementsByClassName('ckbx_ship');
  console.log("batching", cb);

  for (var i = 0; i < claimList.length; i++) {
    let batched = false;
    for (var a = 0; a < cb.length; a++) {
      if (cb[a].value == claimList[i]) {
        console.log("batching", cb[a].value);
        batched = true;
        cb[a].click();
      }

    }
    if (batched == false) {
      alert("The claim ", claimList[i]," was not batched");
    }
  }

  //document.getElementById('submitBatch').click();

}
