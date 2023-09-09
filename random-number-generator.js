let a;
let b;
let c;

document.getElementById("rollbtn").onclick = function(){

    a = Math.floor(Math.random() * 6+1);
    b = Math.floor(Math.random() * 6+1);
    c = Math.floor(Math.random() * 6+1);

    document.getElementById("alabel").innerHTML = a;
    document.getElementById("blabel").innerHTML = b;
    document.getElementById("clabel").innerHTML = c;
    
}