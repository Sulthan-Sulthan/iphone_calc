function display(val){
    document.getElementById('result').value += val;
}
function reset(){
    window.location.reload()
}
function cancel(){
    let res = document.getElementById("result").value;
    res = parseInt(res);   
    document.getElementById("result").value = parseInt(res/10);
    
}
function calculate(){
    var resultField = document.getElementById('result');
    var result = eval(resultField.value);
     resultField.value = result;
}