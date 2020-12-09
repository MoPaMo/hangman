$(function () {
  var s = Snap("#svg");
  var objects = [
    Snap.select("#h-1"),
    Snap.select("#h-2"),
    Snap.select("#h-3"),
    Snap.select("#head"),
    Snap.select("#b"),
    Snap.select("#a-l"),
    Snap.select("#a-r"),
    Snap.select("#b-l"),
    Snap.select("#b-r"),
  ];
  for (ob of objects) {
    ob.animate({ opacity: 0 }, 500);
  }
  var errorCount = 0;
  function die() {
    alert("You died");
  }
  function rerror() {
    errorCount++;

    if (errorCount > 8) {
      die();
    }
    objects[errorCount - 1].animate({ opacity: 1 }, 1000);
  }
  rerror();
  $(document).click(function () {
    rerror();
  });
});
