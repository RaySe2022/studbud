function task () { 
    this.taskname = "";
    this.taskdate = "";
    this.duration = 0; 
    this.priority = ""; 
}
console.log("hello");

function timeline () { 
    var today = new Date(); 
    var date = today.getDate();
    if (date>1 && date <= 21 && (today.getMonth()== 3 || today.getMonth() == 5 || today.getMonth()== 8 || today.getMonth () == 10)){
        var text = document.createTextNode("");
        for (var i = date-1; i <= date + 9; i++){
        var span = document.createElement("span");
        if (i== date){
            text = document.createTextNode("today")
        }
        else
        text = document.createTextNode(""+(i));
        span.appendChild(text);
        document.getElementById("timeline").appendChild(span);
    }
    }
}

function newtask () { 
    var newtask = new task();
    newtask.taskname = document.getElementById("taskname").value;
    newtask.taskdate = document.getElementById("date").value; 
    newtask.duration = parseInt(document.getElementById("duration").value)
    newtask.priority = document.getElementById("priority").value
}
