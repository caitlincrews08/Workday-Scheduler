$(document).ready(function() {

  // gets today's date
  function getDate() {
    var now = moment().format("dddd, MMMM D, YYYY");
    $("#currentDay").append(now);
  };
  // displays date
  getDate();

  // business hours array
  var bizHours = [
    {
      id: "0",
      time: "9",
      type: "am"
    },
    {
      id: "1",
      time: "10",
      type: "am"
    },
    {
      id: "2",
      time: "11",
      type: "am"
    },
    {
      id: "3",
      time: "12",
      type: "pm"
    },
    {
      id: "4",
      time: "1",
      type: "pm"
    },
    {
      id: "5",
      time: "2",
      type: "pm"
    },
    {
      id: "6",
      time: "3",
      type: "pm"
    },
    {
      id: "7",
      time: "4",
      type: "am"
    },
    {
      id: "8",
      time: "5",
      type: "pm"
    },
  ]

  // timeblocks
  bizHours.forEach(function(hour){
    // creates row div for each hour
    var hourDiv = $("<div>");
    // adds row classs
    hourDiv.addClass("row");
    // appends each hours div to container
    $(".container").append(hourDiv);
    
    // creates time display
    var displayHour = $("<div>");
    displayHour.text(hour.time);
    displayHour.addClass("col-md-2", "hour");

    // creates scheduling form
    var scheduleHere = $("<div>");
    scheduleHere.addClass("col-md-9", "description");
    // creates text area for user input
      var input = $("<textarea>");
      input.addClass("col-md-9", "description");
      scheduleHere.append(input);
    
    // creates save button
    var save = $("<button>");
    save.text("Save");
    save.addClass("col-md-1", "saveBtn")
    


    hourDiv.append(displayHour, scheduleHere, save);
  });



});