
var fullDate = moment().format('dddd MMMM Do YYYY h:mm:ss')
var curdayTxt = $('#currentDay')
var curHour = moment().format('h')
var milHours = moment().format('H')
var milEl = $('.culTime[data-milTime]')
// test
var testTime = 13
// test

jQuery.each(milEl,function(i,el){
    
    var elTime = el.getAttribute('data-milTime')
    if(elTime > testTime){
        el.parentNode.classList.add('bg-success')    
    }else if(elTime == testTime){
        $( `.culTime[data-milTime= ${testTime}]` ).parent().addClass('bg-danger');
    }
})

// time of day text update
function update() {
    var curTime= moment().format('dddd MMMM Do YYYY h:mm:ss a')
    curdayTxt.text(curTime);
    
    jQuery.each(milEl,function(i,el){
        var elTime = el.getAttribute('data-milTime')
        if(elTime > milEl && milEl>9 &&milEl<18){
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
