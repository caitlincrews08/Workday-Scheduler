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
      time: "09",
      display: "9 am",
      savedAppointments: ""
    },
    {
      id: "1",
      time: "10",
      display: "10 am",
      savedAppointments: ""
    },
    {
      id: "2",
      time: "11",
      display: "11 am",
      savedAppointments: ""
    },
    {
      id: "3",
      time: "12",
      display: "12 pm",
      savedAppointments: ""
    },
    {
      id: "4",
      time: "13",
      display: "1 pm",
      savedAppointments: ""
    },
    {
      id: "5",
      time: "14",
      display: "2 pm",
      savedAppointments: ""
    },
    {
      id: "6",
      time: "15",
      display: "3 pm",
      savedAppointments: ""
    },
    {
      id: "7",
      time: "16",
      display: "4 pm",
      savedAppointments: ""
    },
    {
      id: "8",
      time: "17",
      display: "5 pm",
      savedAppointments: ""
    },
  ]

  // saves data to local storage
  function myAppointments() {
    localStorage.setItem("bizHours", JSON.stringify(bizHours));
  }
  
  // sets any appointments saved in local storage
  function setAppointments(){
    bizHours.forEach(function(hours){
      $('#${hours.id}').val(hours.savedAppointments);
    });
  }
  

  // displays saved appointments to schedule
  function displayAppointment(){
        var storedAppointments = JSON.parse(localStorage.getItem("bizHours"));
       if (storedAppointments) {
         bizHours = storedAppointments;
       }

       myAppointments();
       setAppointments();
  }

  // this function creates the timeblock div, hour display, text area, and save buttons - - - - - - - - - - - - - - -
  bizHours.forEach(function(hour){
    // creates row div for each hour
    var hourDiv = $("<div>");
    // adds row classs
    hourDiv.addClass("row");
    // appends each hours div to container
    $(".container").append(hourDiv);
    
    // creates time display
    var displayHour = $("<div>");
    displayHour.text(hour.display);
    displayHour.addClass("col-md-2 hour");

    // creates scheduling form
    var scheduleHere = $("<textarea>");
    scheduleHere.addClass("col-md-9 textarea");
    scheduleHere.attr("id", hour.id);
    // color codes area based on past, present, and future
    if (hour.time < moment().format("HH")) {
      scheduleHere.attr({"class": "col-md-9 textarea past"})

    } else if (hour.time === moment().format("HH")) {
      scheduleHere.attr({"class": "col-md-9 textarea present"})

    } else if (hour.time > moment().format("HH")) {
      scheduleHere.attr({"class": "col-md-9 textarea future"})
    };
    
    // creates save button
    var saveBtn = $("<button>");
    saveBtn.text("Save");
    saveBtn.addClass("col-md-1 saveBtn");

    // FUNCTIONS --------------------------------------------------------------------------------

    // checks local storage for appointments and displays them to the user
    var myAppointments;
    
    function checkLocalStorage() {
      if (localStorage.getItem('bizHours')){
        myAppointments = JSON.parse(localStorage.getItem('bizHours'));
      } else {
        myAppointments = []};
    };

    checkLocalStorage();

    // click event for save button
    $(saveBtn).on("click", function(event){
      // prevents page from refreshing
      event.preventDefault();
      var textareaContent = $(this).siblings('textarea').val();
      console.log(textareaContent);
      $(savedAppointments).append(textareaContent);
      
      
      displayAppointment();

      // createAppointment();
    })
    



    hourDiv.append(displayHour, scheduleHere, saveBtn);
  });

// create saveToLocal function √
// create createAppointment function
// then figure out whats wrong with the styling

});