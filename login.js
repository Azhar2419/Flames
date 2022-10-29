// function logon(){
    // var fso = new ActiveXObject("Scripting.FileSystemObject");
    // var filename = "database.html";
    // var file = fso.GetFile(filename);
    // var streamWrite = file.OpenAsTextStream(2);
    // streamWrite.Write("Mawa ek peg la");
    // streamWrite.Close();
// }
function login(){
    console.log('in login function')
const fs = require("fs");
fs.readFile("database.txt",'utf8',(err,data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
});

}

function login2(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username,password);

    localStorage.setItem("email-id",username);
    localStorage.setItem("password-id",password);
    
};

function signup(){

}