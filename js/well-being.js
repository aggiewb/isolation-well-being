//Add a click listener that stores the current state of the page
function saveState(event){
    event.preventDefault();
    var inputValues = {};
    var inputs = document.querySelectorAll("input");
    for(var i = 0; i < inputs.length; i++){
        var element = inputs[i];
        var type = element.type;
        var value;
        if(type === "checkbox"){
            value = element.checked;
        } else {
            value = element.value;
        }
        inputValues[element.id] = value;
    }
    localStorage.state = JSON.stringify(inputValues);
}

var button = document.querySelector('input[type="submit"]');
button.addEventListener("click", saveState);

//Restore page state on load