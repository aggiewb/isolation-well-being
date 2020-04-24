//Add a click listener that stores the current state of the page
function saveState(event){
    event.preventDefault();
    var inputValues = {};
    var inputs = document.querySelectorAll("input");
    for(var i = 0; i < inputs.length; i++){
        var element = inputs[i];
        var id = element.id;
        if(!id){
            continue;
        }
        var value;
        if(element.type === "checkbox"){
            value = element.checked;
        } else {
            value = element.value;
        }
        inputValues[element.id] = value;
    }
    localStorage.state = JSON.stringify(inputValues);
    var date = new Date();
    localStorage.date = JSON.stringify({
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    });
}

var button = document.querySelector('input[type="submit"]');
button.addEventListener("click", saveState);

//Restore page state on load
function restoreState(){
    var stringyState = localStorage.state;
    if(!stringyState){
        return;
    }
    var stringyDate = localStorage.date;
    if(stringyDate){
        var date = JSON.parse(stringyDate);
        var nowDate = new Date();
        if(nowDate.getDate() !== date.day || nowDate.getMonth() !== date.month || nowDate.getFullYear() !== date.year){
            resetState();
            return;
        }
    }
    var state = JSON.parse(stringyState);
    var keys = Object.keys(state);
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        var element = document.getElementById(key);
        var value = state[key];
        if(element.type === "checkbox"){
            element.checked = value;
        } else {
            element.value = value;
        }
    }
}

restoreState();

//Reset form state
function resetState(){
    var inputs = document.querySelectorAll("input[id]");
    for(var i = 0; i < inputs.length; i++){
        var element = inputs[i];
        if(element.type === "checkbox"){
            element.checked = false;
        } else {
            element.value = "";
        }
    }
    delete localStorage.state;
}