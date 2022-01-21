/////////////////////// variables
var now = moment();


// TODO: create timeblocks





// TODO: Function to update date at top of page (id=#currentDay)

var getCurrentDate = function() {
    //clear text content
    var dateDisplay = document.querySelector("#currentDay");
    dateDisplay.textContent = "";
    
    var weekday = ""
    var month = ""

    // get weekday
    switch (now.isoWeekday()) {
        case 1: 
            weekday = "Monday";
            break;
        case 2: 
            weekday = "Tuesday";
            break;
        case 3:
            weekday = "Wednesday";
            break;
        case 4:
            weekday = "Thursday"
            break;
        case 5:
            weekday = "Friday";
            break;
        case 6:
            weekday = "Saturday";
            break;
        case 7:
            weekday = "Sunday";
            break;
    };

    // get month
    switch (now.month()) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }

    var dateNumber = now.date();
    if (dateNumber === 3 || dateNumber === 23) {
        dateDisplay.textContent = (weekday + ", " + month + " " + dateNumber + "rd");
    } 
    else if (dateNumber === 2 || dateNumber === 22) {
        dateDisplay.textContent = (weekday + ", " + month + " " + dateNumber + "nd");
    } 
    else if (dateNumber === 1 || dateNumber === 11 || dateNumber === 21 || dateNumber === 31) {
        dateDisplay.textContent = (weekday + ", " + month + " " + dateNumber + "st");
    }
    else {
        dateDisplay.textContent = (weekday + ", " + month + " " + dateNumber + "th");
    }
};

getCurrentDate();





// TODO: Use moment to get time; check time of each container in a for loop and change color accordingly





// TODO: Add save button functionality; when click saveBtn, update localStorage

