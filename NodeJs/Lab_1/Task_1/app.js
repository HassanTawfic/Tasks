var add = function(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number')
    console.log(x+y)
    else{
        console.log("Error!");
    }
}

var sub = function(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number')
    console.log(x-y)
    else{
        console.log("Error!");
    }
}

var multi = function(x,y){
    if(typeof(x) == 'number' && typeof(y) == 'number')
    console.log(x*y)
    else{
        console.log("Error!");
    }
}
/*
add(10,12);
add(20,"a");

sub(10,12);
sub(20,"a");

multi(10,12);
multi(20,"a");
*/
//module.exports.Add = add;
//module.exports.Sub = sub;
//module.exports.Multi = multi;
module.exports = {
    Add:add,
    Sub:sub,
    Multi:multi
}