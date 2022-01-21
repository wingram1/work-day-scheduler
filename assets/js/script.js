/////////////////////// variables
var now = moment();
var saveBtn = document.querySelector(".saveBtn");
var updateInterval = 1 * (60 * 1000); //1 minute
var currentTime = now.hour();
var inputActive = false;

var emptyTimeBlockArray = [
    {
        id: "h9-block",
        value: ""
    },
    {
        id: "h10-block",
        value: ""
    },
    {
        id: "h11-block",
        value: ""
    },
    {
        id: "h12-block",
        value: ""
    },
    {
        id: "h13-block",
        value: ""
    },
    {
        id: "h14-block",
        value: ""
    },
    {
        id: "h15-block",
        value: ""
    },    
    {
        id: "h16-block",
        value: ""
    },    
    {
        id: "h17-block",
        value: ""
    }
];

var getCurrentDate = function() {
    //clear text content
    var dateDisplay = document.querySelector("#currentDay");
    dateDisplay.textContent = "";
    
    var weekday = ""
    var month = ""

    // cnovert weekday value to string
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

    // convert month value to string
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

    //get ending for date number and update HTML
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


// TODO: Use moment to get time; check time of block in a for loop and change color accordingly
var updateTimeBlocks = function(){
    currentTime = now.hour();

    //update time blocks
    for (let i=0; i<9; i++) {
        var workingBlock = $("#h" + (i+9) + "-block");

        //if earlier, set class to .past; else if's for present and future 
        if ((i+9) < currentTime) {
            $(workingBlock).addClass("past");
        }
        else if ((i+9) === currentTime) {
            $(workingBlock).addClass("present");
        }
        else if ((i+9) > currentTime) {
            $(workingBlock).addClass("future");
        }
    }
};

var setUpdateTimer = function(){
    setInterval(function() {
        console.log("interval passed! update should take place");

        //update header html with date
        getCurrentDate();

        //update color classes of time blocks
        updateTimeBlocks();
    }, updateInterval);
}


$(".saveBtn").click(function() {

    //gets value of sibling input
    var inputId = $(this).siblings("input").attr("id");
    var inputValue = $(this).siblings("input").val();
    var workingIndex = null;

    //loop through array to find id match, get working index
    for (let i=0; i < timeblocks.length; i++) { 
        if (timeblocks[i].id === inputId) {
            workingIndex = i;
            break;
        }
    }
    
    //set timeblocks[i].value to equal the input value
    timeblocks[workingIndex].value = inputValue;
    console.log(timeblocks);

    //save to localStorage
    localStorage.setItem("timeblocks", JSON.stringify(timeblocks));

});

var loadTimeBlocks = function() {
    //get array from local storage
    timeblocks = localStorage.getItem("timeblocks");

    //check if existing; if not, set to equal emptyTimeBlockArray
    if (timeblocks === null) {
        timeblocks = emptyTimeBlockArray;
    } else {
        timeblocks = JSON.parse(timeblocks);
    }

    console.log("Time blocks: "+ timeblocks);

    //make value of each block id = timeblocks[i].value
    for (let i=0; i < timeblocks.length; i++) {
        var tempInput = document.querySelector("#h" + (i+9) + "-block");

        tempInput.value = timeblocks[i].value;
    }
};



///////////call functions//////////
loadTimeBlocks();

getCurrentDate();
updateTimeBlocks();

setUpdateTimer();
