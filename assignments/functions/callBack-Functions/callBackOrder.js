function boilWater(callback) {
  console.log("Boiling water...");
  setTimeout(function() {
    console.log("Water boiled!");
    callback(2);
  }, 2000);
}

function addNoodles(callback) {
  console.log("Adding noodles...");
  setTimeout(function() {
    console.log("Noodles cooked!");
    callback(3);
  }, 3000);
}

function serveNoodles() {
  console.log("Serving noodles 🍜");
  console.log("noodles was served in :",totalTime, "seconds");
}

// call them in correct order using callbacks
boilWater(function(time1){
    addNoodles(function(time2){
        serveNoodles (time1 +time2);
    });
});