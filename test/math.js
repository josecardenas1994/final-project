



var lib = [];
var arId = 0;

function Item(name, desc, price){
    this.name = name;
    this.desc = desc;
    this.price = price;
    arId += 1;
}

function create(){
   
    var dta = true;
    var name = document.getElementById("inpt").value;
    var desc = document.getElementById("inpt2").value;
    var price = document.getElementById("inpt3").value;
if(dta){
    var theItem = new Item(name, desc, price);
    lib.push(theItem);
    }
    console.log(lib);
}

function remove(){
 var nm = document.getElementById("rm" + 1).value;
    lib.splice(nm, 1);
   
    
   console.log(lib); 
}




//function init()




//window.onload = init;

