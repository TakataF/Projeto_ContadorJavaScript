clicker = 0;
reset = 0;

function addclick(){
    clicker += 1;
    document.getElementById("clicker").innerHTML=`clicks:${clicker}`;
}