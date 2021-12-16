
var fullDate = moment().format('dddd MMMM Do YYYY h:mm:ss')
var curdayTxt = $('#currentDay')
var milEl = $('.culTime[data-milTime]')
var inputEl = $('.inputEl')
var saveButton = $('.sveBtn')

//saveBtn Clicked
saveButton.on('click',function(e){
    e.preventDefault()
    var inputText = e.target.parentNode.parentNode[0].value
    var timeFrame = e.target.parentNode.parentNode[0].getAttribute('data-time')
    localStorage.setItem(timeFrame, inputText)
    console.log(timeFrame);
    
    console.log(inputText);
})
jQuery.each(inputEl,function(i,el){
    var att = el.getAttribute('data-time')
    var holderTxt = localStorage.getItem(att)
    console.log(holderTxt);
    el.classList.add('placeholder')
    el.value = holderTxt
    
})


// time of day text update
function update() {
    var curTime= moment().format('dddd MMMM Do YYYY h:mm:ss a')
    var curHour = moment().format('h')
    var milHours = moment().format('H')
    
    curdayTxt.text(curTime);
    
    jQuery.each(milEl,function(i,el){
        var elTime = el.getAttribute('data-milTime')
        if(elTime > milHours && milHours > 9 && milHours < 18){
            el.parentNode.classList.add('bg-success')    
        }else if(elTime == milEl){
            $( `.culTime[data-time= ${curHour}]` ).parent().addClass('bg-danger');
        }
    })
};
curdayTxt.ready(function(){
    update();
    setInterval(update, 1000);
})

$(document).ready(function(){
    // 

    // test
    update();
    setInterval(update, 1000);
    
})
