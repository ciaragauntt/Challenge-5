var today = moment();
$(currentDay).text(today.format("MMMM Do, YYYY, h:mm:ss a"));
console.log(today.format());

var checkTime = function() {
    var hour = $(".hour").text().trim();
    var time = moment(hour, "LT");
    console.log(time)

    $(".hour").removeClass(".present .past .future");

    if (moment().isAfter(time)) {
        $(".hour").addClass(".past");
    } else if (moment().isBefore(time)) {
        $(".hour").addClass(".future");
    } else {
        $(".hour").addClass(".present");
    }

}

checkTime();

const saveButton = document.querySelector(".saveBtn")

function save() {
    saveBtn()
}

saveButton.addEventListener("click", save)
