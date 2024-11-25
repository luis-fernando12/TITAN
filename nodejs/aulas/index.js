var calc = require("./calc")


var args = process.argv.slice(2);


var a = Number (args[1]);
var b = Number (args[2]);
var c = " ";




if (args[0] == 's') {
    c= calc.soma(a,b);
}

else if  (args[0] == 'm') {
    c = calc.multi(a,b);
}

else  {
    c = "opçao invalida"
};






console.log(c)