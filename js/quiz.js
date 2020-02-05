function result() {
    var x = 0;
    var i = 'A';
    var j = 'C';
    if(document.getElementById('q1').checked)
    x=x+5;
    else
    x++
    
    if(document.getElementById('q5').checked)
    x=x+5;
    else
    x++;

    if(x==2)
    alert("Select right option")
    else
    {
        if(x==6)
        alert(x-1);
        if(x==10)
        alert(x);
    }
}