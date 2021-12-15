
var fullDate = moment().format('dddd MMMM Do YYYY')
var curdayTxt = $('#currentDay')
var curHour = moment().format('h')
curdayTxt.text(fullDate)
console.log(curHour);
var timeFrame = $('.culTime')
var time2 = $('.culTime[data-time]')

console.log(time2);


console.log(timeFrame);
for (let i = 0; i < timeFrame.length - 1; i++) {
    const element = timeFrame.attr('data-time');
    console.log(element);

}



$( `.culTime[data-time= ${curHour}]` ).parent().addClass('bg-danger');
