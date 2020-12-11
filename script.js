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
    $("*").append(string)
    alert("You died");
  }
  function rerror() {
    errorCount++;

    if (errorCount > 8) {
      die();
    }
    objects[errorCount - 1].animate({ opacity: 1 }, 1000);
  }

  function guessed(charG) {
    if (array.indexOf(charG) != -1) {
      while (array.indexOf(charG) != -1) {
        let pos = array.indexOf(charG);
        $("#textbar span:nth-child(" + (pos * 1 + 1) + ")").html(charG);
        array[pos] = "_________________";
        $("#donechar").append('<span class="green">'+charG+'</span>')
      }
    } else {
        $("#donechar").append('<span class="red">'+charG+'</span>')
      rerror();
    }
  }
  $("input").on("keyup", function () {
    if ($(this).val() != "") {
      let c = $(this).val();
      $(this).val("");
      guessed(c);
    }
  });
  function start() {
    var string = names[Math.floor(Math.random() * names.length)];
    var array = string.split("");
    for (char of array) {
      array[array.indexOf(char)] = char.toLowerCase();
      $("#textbar").append("<span>_</span> ");
    }
  }

  var string = names[Math.floor(Math.random() * names.length)];
    var array = string.split("");
    for (char of array) {
      array[array.indexOf(char)] = char.toLowerCase();
      $("#textbar").append("<span>_</span> ");
    }
});
