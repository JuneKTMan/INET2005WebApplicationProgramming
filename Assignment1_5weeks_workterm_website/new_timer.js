// get a local date
var date = new Date();
// get the date to a string
var displayDate = date.toDateString();
// get the time to a string
var time = date.toLocaleTimeString();


//set innerHTML'time' to the date 'a space' and the time
document.getElementById('time').innerHTML = displayDate + ' ' + time;