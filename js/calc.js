function clearscreen() {
 document.getElementById("screen").value = "0";
}
function display(value) {
 document.getElementById("screen").value += value;
}
function equals()
{
    document.getElementById("screen").value=eval(document.getElementById("screen").value)
}
function ac() {
 document.getElementById("screen").value = " ";
}