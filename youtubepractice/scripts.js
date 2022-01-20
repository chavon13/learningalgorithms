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


function palindrome(str){
    const revString = str.split('').reverse().join('');
    return revString === str
}

console.log(palindrome('hello'))


function reverseInt(int){
    const revString = int.toString().split('').reverse().join('');

    return parseInt(revString)
}

console.log(reverseInt(12345))

function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');
    for(let i=0; i<strArr.length;i++){
        strArr[i] = strArr[i].substring(0, 1).toUpperCase()+strArr[i].substring(1)
    }
    return strArr.join(' ')
}

console.log(capitalizeLetters('hello to you!'))


function fizzBuzz(){
    for(let i=1; i<=100; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz')
        }else if(i%3===0){
            console.log('Fizz')
        }else if(i%5===0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

console.log(fizzBuzz())

function reverseString3(str){
    const strArr = str.split('').reverse().join('');
    return strArr
}

console.log(reverseString('hello'))

function reverseString5(str){
    let revString = '';
    for(let i=str.length-1;i>=0;i--){
        revString = revString + str[i];
        return revString;
    }
}

console.log(reverseString5('hello'))