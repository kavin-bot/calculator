function AC(){
        document.getElementById('display').value="";
        document.getElementById('history').value="";
}
function enter(num){
        if(document.getElementById("display").value==="0")
        document.getElementById('display').value="";
        (document.getElementById('display').value+=num);
}
function back(){
var remove=document.getElementById('display').value;
(document.getElementById('display').value=remove.slice(0,-1));
}
function equal() {
        document.getElementById("history").value = document.getElementById("display").value;
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
function percent() {
        document.getElementById("history").value = document.getElementById("display").value
        document.getElementById("display").value = parseFloat(document.getElementById("display").value) / 100;
    }
