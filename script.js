//Time at the top of the page
var today = moment();
$(currentDay).text(today.format("MMMM Do, YYYY, h:mm:ss a"));
console.log(today.format());
//function that changes the color of the row based on the time of day
function timeTracker(){
    var currentHour = moment().hour();
    console.log(currentHour);

    $('.time-block').each(function(){
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})
}
timeTracker();
//on click save to local storage 
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
       
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, description);
    })

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
})