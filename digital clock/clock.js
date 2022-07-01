// console.log('This is tutorial no.62 , making a clock');

function updateClock(){
    //Get the new date
    let currentTime = new Date();

    //Extracting hour,minutes and second from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();


    //pad 0 when only one digit
    currentHour = (currentHour<10?"0":'') + currentHour;
    currentMinutes = (currentMinutes<10?"0":'') + currentMinutes;
    currentSecond = (currentSecond<10?"0":'')+ currentSecond;

    let timeofDay = (currentHour<12)?"AM":"PM";
    
    //showing in 12 hour format
    currentHour = (currentHour>12)?currentHour-12:currentHour;//after doing this when 12 it show 00 so lets solve this
    currentHour = (currentHour==0)?12:currentHour;
    
    //adding am, pm according to hour


    //this is the time formtat to be shown on screen 
    let currentTimeStr = currentHour + ":"+ currentMinutes + ":"+ currentSecond +" "+timeofDay;


    document.getElementById('clock').innerHTML = currentTimeStr;

}



