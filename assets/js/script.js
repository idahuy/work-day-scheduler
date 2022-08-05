var now = moment();
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = moment(now).format('dddd, MMMM do');
var blockContainer = document.querySelector('.container')
var timeArr = ['9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM']
var text = $('.textarea')

var pageLoad = function() {

}


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
        contentEl.setAttribute("class", "col-md-10 border textarea time-block");
        contentEl.setAttribute("data-time-id", i);
        divEl.appendChild(contentEl);

        // create block for button
        var buttonEl = document.createElement('button');
        buttonEl.setAttribute("class", "col-md-1 saveBtn");
        divEl.appendChild(buttonEl);

        // create icon
        var iEl = document.createElement('i');
        iEl.textContent = "Save";
        buttonEl.appendChild(iEl);
    }
};



window.onload=createTimeBlocks();

function notify() {
    alert( "clicked" );
  }
  $( ".textgroup" ).on( "click", notify );