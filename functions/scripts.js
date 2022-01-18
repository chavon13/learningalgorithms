function goodMorningNeighbor(name) {
    return `Good morning, ${name}`;
}

goodMorningNeighbor('Tonya');

function knockKnock(){
    return "who's there?"
}

knockKnock()

var gallons = 12;
var mpg = 40;

function howFar(){
    return gallons * mpg
}

howFar()

var height = 10;

function volume() {
    var width = 10;
    var length = 10;
    var volumeofObject = function(){
        return length * width * height;
    }
    return volumeofObject
}