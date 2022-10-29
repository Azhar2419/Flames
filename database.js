var txt;
console.log("In Db.js");
function preload(){
    txt = loadStrings("database.txt");
}

function setup(){
    noCanvas();
    console.log(txt);
}