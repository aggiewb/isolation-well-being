var inputValues = {};
var inputs = document.querySelectorAll("input");
for(var i = 0; i < inputs.length; i++){
    var type = inputs[i].type;
    var value;
    if(type === "checkbox"){
        value = inputs[i].checked;
    } else {
        value = inputs[i].value;
    }
    inputValues[inputs[i].id] = value;
}