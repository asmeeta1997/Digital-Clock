function timeDisplay (){
  
    var date = new Date();

    //date
    var day = date.getDay();
    var month = date.getMonth();
    var daym = date.getDate();
    var dayarray = new Array ("Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,","Saturday,");
    var montharray = new Array("January","February","March","April","May","June","July", "August","September","October","November","December");

   //time
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var session = "AM";

   

    if (hour == 0){
        hour = 12;
    }
    
    if (hour > 12){
        hour = hour-12;
        session ="PM";
    }

    hour = (hour < 10) ?"0" + hour : hour;
    min = (min < 10) ?"0" + min : min;
    sec = (sec < 10) ?"0" + sec : sec;


    var time =""+ dayarray[day]+ " "+daym + " " +montharray[month]+ " | "  + hour + ":" + min +":" + sec + " " + session;

    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;

    setTimeout(timeDisplay,1000);
}

timeDisplay();