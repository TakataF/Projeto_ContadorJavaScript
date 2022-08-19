clicker = 0;
reset = 0;

function addclick(){
    clicker += 1;
    document.getElementById("clicker").innerHTML=`clicks:${clicker}`;
}
function addreset(){
    clicker = 0;
    reset += 1;
    document.getElementById("clicker").innerHTML=`clicks:${clicker}`;
    document.getElementById("reset").innerHTML=`Reset:${reset}`;
}

function addzero(){
    clicker = 0;
    reset = 0;
    document.getElementById("clicker").innerHTML=`clicks:${clicker}`;
    document.getElementById("reset").innerHTML=`Reset:${reset}`;

}