$(document).ready(function() {

  // date display
  var now = moment().format("dddd, MMMM D, YYYY");
  $("#currentDay").append(now);

  // business hours array
  var bizHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]

  // timeblocks
  bizHours.forEach(function(hour){
    // creates row div
    var rowDiv = $("<div>");
  // adds class to each row
    rowDiv.addClass("row");
    console.log(rowDiv.class)



    rowDiv.html(hour);
    $(".container").append(rowDiv);
  });



});
{/* <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div> */}