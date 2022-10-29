
String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


function flames(){
    let output = '';
    let name1 = document.getElementById("input1").value;
    name1 = name1.toLowerCase();
    let name2 = document.getElementById("input2").value;
    name2 = name2.toLowerCase();
    if (name1 === name2){
        alert("there there see, same names coming");
        window.location.assign("same.html");
    }
    else{
    output = name1 + name2;
    len = output.length;
    output = dupRemove(output,len);
    output = newStr(output);
    len = output.length;
    const nameArr = output.split('');
    let res = doFlames(nameArr.length);
    res = result(res);
    document.getElementById("input3").value = res;
    };
};

function result(res){
    let saveRes = '';
    for (let result of res){
        if (typeof(result) !== 'undefined'){
            saveRes = result;
        }
    }
    switch(saveRes){
        case 'f':
            saveRes = 'Yo man you are Friends';
            alert(saveRes)
            window.location.assign("friends.html");
            break;
        case 'l':
            saveRes = 'eeewyy you are Lovers';
            alert(saveRes)
            window.location.assign("lovers.html");
            break;
        case 'a':
            saveRes = 'kanivvanid inka Arranged marriage';
            alert(saveRes)
            window.location.assign("marriage.html");
            break;
        case 'm':
            saveRes = 'eh eh eh Marriage';
            alert(saveRes)
            window.location.assign("marriage.html");
            break;
        case 'e':
            saveRes = 'Shabbaa Enimies miru';
            alert(saveRes)
            window.location.assign("enimies.html");
            break;
        case 's':
            saveRes = 'edo something something undi';
            alert(saveRes)
            window.location.assign("something.html");
            break;
    }
    return saveRes;
}

function doFlames(len){

    let flm = ['f', 'l', 'a', 'm', 'e', 's'];
    let actualctr = flm.length;
    let counter = 0;
    while (actualctr > 1){
        
    actualctr = 0;
    for (let i = 0; i < flm.length; i++){
        if (typeof(flm[i]) === 'undefined'){
            continue;
        }
        counter++;
        if (flm.length === 1){
            break;
        }
        if (counter === len){
            delete flm[i];
            counter = 0;
        }
        
    }
    for (let i = 0; i < flm.length; i ++){
        if (typeof(flm[i]) !== 'undefined'){
            actualctr++;
        }
    }
    }
return flm;
};

function newStr(name){
    let newName = '';
    for (let i = 0; i < name.length; i++){
        if (name[i] !== 'x'){
            newName = newName + name[i];
        }
    }
    return newName;
};

function dupRemove(name,len){
  
    for (let i = 0; i < len; i++){
        let changed = false;
        for (let j = (i + 1); j < len; j++){
            if (name[i] === name[j]){
                name = name.replaceAt(j,'x');
                changed = true;
            } 
        }
        if (changed){
            name = name.replaceAt(i,'x');
        }
    }
    return name;
};