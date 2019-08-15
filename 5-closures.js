function mozzilaExample() {
    var name = 'Mozilla Firefox!';
    function displayName() {
        console.log(name);
    }
    return displayName;
}
  
var closureVariable = mozzilaExample();
closureVariable()


function areYouSure(index){
    var names = ['Carl', 'Sez', 'Charlie']
    function printName(){
        console.log(names[index])
    }
    return printName
}

var closureVariable = areYouSure(2);
closureVariable()
