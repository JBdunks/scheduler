var m = moment().format("MMMM Do YYYY");
var x = 19; // why did i do this?
document.getElementById("currentDay").textContent = m;

var hours = ["9AM", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

var currentTime = moment().format("HH");
var militaryTime = parseInt(currentTime);

function compare() {
  if (z < militaryTime) {
    titleCol.addClass("past");
  } else if (z > militaryTime) {
    titleCol.addClass("future");
  } else if (z === militaryTime) titleCol.addClass("present");
}

for (var i = 0; i < hours.length; i++) {
  var newRow = $("<div>");
  newRow.addClass("row");

  var hourCol = $("<div>");
  hourCol.text(hours[i]);
  hourCol.addClass("col-1 hour");
  hourCol;
  var titleCol = $("<textarea>");
  titleCol.addClass("col-10 textarea description timeblock");

  z = 9 + i;
  compare(z);
  var saveCol = $("<div>");
  saveCol.addClass("col-1 saveBtn");
  saveCol.append("<i class='fas fa-lock'></i>");
  newRow.append(hourCol, titleCol, saveCol);
  $("#calendar-view").append(newRow);
}

console.log(militaryTime);
console.log(currentTime);
console.log(z);
