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
      time: "9 am",
      savedAppointments: ""
    },
    {
      id: "1",
      time: "10 am",
      savedAppointments: ""
    },
    {
      id: "2",
      time: "11 am",
      savedAppointments: ""
    },
    {
      id: "3",
      time: "12 pm",
      savedAppointments: ""
    },
    {
      id: "4",
      time: "1 pm",
      savedAppointments: ""
    },
    {
      id: "5",
      time: "2 pm",
      savedAppointments: ""
    },
    {
      id: "6",
      time: "3 pm",
      savedAppointments: ""
    },
    {
      id: "7",
      time: "4 pm",
      savedAppointments: ""
    },
    {
      id: "8",
      time: "5 pm",
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
      $(hours.id).val(hours.savedAppointments);
    });
  }
  

  // displays saved appointments to schedule
  function displayAppointment(){
        var storedAppointments = JSON.parse(localStorage.getItem("bizHours"));
       if (storedAppointments) {
         bizHours.savedAppointments = storedAppointments;
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
    displayHour.text(hour.time);
    displayHour.addClass("col-md-2 .hour");

    // creates scheduling form
    var scheduleHere = $("<textarea>");
    scheduleHere.addClass("col-md-9 textarea");
    
    // creates save button
    var saveBtn = $("<button>");
    saveBtn.text("Save");
    saveBtn.addClass("col-md-1 .saveBtn");

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

// start by creating click event for button √
// create saveToLocal function √
// create createAppointment function
// then figure out whats wrong with the styling

});