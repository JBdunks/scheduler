var m = moment().format("MMMM Do YYYY");
var x = 19;
document.getElementById("currentDay").textContent = m;

var hours = ["9AM", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var currentTime = moment().format("HHmm");
var militaryTime = parseInt(currentTime);

for (var i = 0; i < hours.length; i++) {
  var newRow = $("<div>");
  newRow.addClass("row");

  var hourCol = $("<div>");
  hourCol.text(hours[i]);
  hourCol.addClass("col-1 hour");
  hourCol;
  var titleCol = $("<div>");
  titleCol.addClass("col-10 textarea description timeblock");
  titleCol.text("some text");
  titleCol.val(900 + 100 * i);
  var saveCol = $("<div>");
  saveCol.addClass("col-1 saveBtn");
  saveCol.append("<i class='fas fa-lock'></i>");
  newRow.append(hourCol, titleCol, saveCol);
  $("#calendar-view").append(newRow);
}

console.log(moment().format("HHmm"));
console.log(militaryTime);