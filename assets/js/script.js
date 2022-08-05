var now = moment();
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = moment(now).format('dddd, MMMM do');
var blockContainer = document.querySelector('.container');
var timeArr = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM'];


var createTimeBlocks = function() {

    for (var i = 0; i < timeArr.length; i++) {
        // create div row container of the blocks
        var divEl = document.createElement('div');
        divEl.setAttribute("class", "row time-block");
        blockContainer.appendChild(divEl);

        // create block for time
        var timeEl = document.createElement('div');
        timeEl.setAttribute("class", "col-md-1 border-top hour");
        timeEl.textContent = timeArr[i];
        divEl.appendChild(timeEl);

        // create block for content
        var contentEl = document.createElement('textarea');
        contentEl.setAttribute("class", "col-md-10 border textarea time-block text-dark");
        contentEl.setAttribute("data-time-id", i);
        divEl.appendChild(contentEl);

        // create block for button
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute("class", "saveBtn col-md-1");
        divEl.appendChild(buttonEl);

        // create icon
        var iEl = document.createElement('i');
        iEl.setAttribute("class", "fa-regular fa-floppy-disk")
        buttonEl.appendChild(iEl);

        var currentHour = moment().hours();
        var text = $('.textarea');
    
        // each loop to add class based on hour
        $(text).each(function(i, element) {
        var currentTime = i + 9;

        if (currentTime < currentHour) {
            $(element).addClass("past");
        } else if (currentTime === currentHour) {
            $(element).addClass("present");
        } else {
            $(element).addClass("future");
        }
        console.log(currentTime);
        });
    }
};

window.onload=createTimeBlocks();

$(".saveBtn").on("click", function() {
    // get the data-time id
    var timeId = $(this).siblings(".textarea").attr("data-time-id");
    // user input
    var userInput = $(this).siblings(".textarea").val();
    // set input to local storage
    localStorage.setItem(timeId, JSON.stringify(userInput));
});   

var getInput = function() {
    var text = $('.textarea');
    // get data id from local storage
    $(text).each(function(i, element) {
        var timeId = $(element).attr("data-time-id");
        var textEl = JSON.parse(localStorage.getItem(timeId));
        $(element).text(textEl);
    });
};

getInput();

