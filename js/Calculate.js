function myfunction() {
    var x = document.getElementById('number1').value;
    var y = document.getElementById('number2').value;
    var z = document.getElementById('number3').value;
    var i = parseInt(x, 10);
    var j = parseInt(y, 10);
    var k = parseInt(z, 10);
    if (i > 100 || j > 100 || k > 100) {
        alert("enter valid value")
        clear();
    }
    else
    {
    document.getElementById('Total').value = i + j + k;
    document.getElementById('Percentage').value = (i + j + k) / 300;
    if (i > j && i > k)
        document.getElementById('Highest').value = i;
    else if (j > k)
        document.getElementById('Highest').value = j;
    else
        document.getElementById('Highest').value = k;
    }

}
function clear() {
    document.getElementById('number1').value="";
    document.getElementById('number2').value="";
    document.getElementById('number3').value="";
}