//$(function () {
  var array, string
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
  $("*").append(string);
  alert("You died");
}
function rerror() {
  errorCount++;
 if(localStorage.volume!==null&&localStorage.volume!==false){
var errorSound=new Audio("error_008.ogg");
errorSound.play()}
  if (errorCount > 8) {
    die();
  }
  objects[errorCount - 1].animate({ opacity: 1 }, 1000);
}
function win(){
  alert("YOU WON")
}
function checkwon(){
  let broken =false
  for (it of array){
    if(it=="_________________"){

    }
    else{
      broken = true;
      break
    }
  }
  if(!broken) win()
}
function guessed(charG) {
  if (array.indexOf(charG) != -1) {
    while (array.indexOf(charG) != -1) {
      let pos = array.indexOf(charG);
      $("#textbar span:nth-child(" + (pos * 1 + 1) + ")").html(charG);
      array[pos] = "_________________";
      $("#donechar").append('<span class="rounded-full bg-green-400 p-1">' + charG + "</span>");
      checkwon()
    }
  } else {
    $("#donechar").append('<span class="rounded-full bg-red-400 p-1">' + charG + "</span>");
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
  string = names[Math.floor(Math.random() * names.length)];
  array = string.split("");
  for (char of array) {
    array[array.indexOf(char)] = char.toLowerCase();
    $("#textbar").append("<span>_</span> ");
  }
}

/*var string = names[Math.floor(Math.random() * names.length)];
var array = string.split("");
for (char of array) {
  array[array.indexOf(char)] = char.toLowerCase();
  $("#textbar").append("<span>_</span> ");
}*/
start()
//});
