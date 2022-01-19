var letters = [];

var word = 'freeCode'
var rword = ''

for(var i=0; i<word.length; i++) {
    letters.push(word[i]);
}

for(var i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword === word) {
    console.log('This is a palindrome!')
} else{
    console.log('This is not a palindrome')
}

function sumUp(n) {
    let result = 0;
    for ( let i=1; i<=n; i++){
        result = result+i;
    }
    return result;
}

console.log(sumUp(3))


function sumUp2(n) {
    return (n/2) * (1 + n);
}

console.log(sumUp2(3))

function sumOfNumbers(numbers) {
    let result = 0;
    for (const number of numbers){
        result += number;
    }
    return result;
}

console.log(sumOfNumbers([1,3,10]))

function reverseString(str){
    const strArray = str.split('');
    strArray.reverse();
    return strArray.join('');
}

console.log(reverseString('hello'))

function reverseString2(str) {
    let revString = ''
    for( let i=str.length-1; i>=0; i--) {
        revString = revString + str[i]
    }
    return revString
}

console.log(reverseString2('hello'))