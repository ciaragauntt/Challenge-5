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
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockTime === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("future");
        $(this).removeClass("present");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
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
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));
})