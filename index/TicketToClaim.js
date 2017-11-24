
let tb = document.getElementById("textbox");
if (header) {
  console.log("its there");
}
//checks to see of the search box has loaded.
if (tb) {
  console.log("tb is here");
  tb.addEventListener("keypress", function(e){
    // checks if enter is pressed
    if (event.keyCode == 13) {
      console(tb.value);

      header.value = tb.value;
    };
  });
};
