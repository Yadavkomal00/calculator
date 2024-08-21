let oldValue = "";
function komal(){
    oldValue = document.getElementById("displayScreen").value;
    document.getElementById("displayScreen").value = eval(oldValue);
}
function oldText(){
    document.getElementById("displayScreen").value = oldValue;
}
