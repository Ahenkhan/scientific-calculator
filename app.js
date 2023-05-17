function getNum(num) {
    
    document.getElementById('result').value += num;
    
}
function clearSrc() {
    document.getElementById('result').value = "";
    
}
function removenum(params) {
    var res = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1);
    
}
function getans() {
    document.getElementById('result').value=eval(document.getElementById('result').value);
    
}
