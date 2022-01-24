function longestWord(sen){
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    const sorted = wordArr.sort(function(a, b){
        return b.length - a.length
    })

    const longestWordArr = sorted.filter(function(word){
        return word.length === sorted[0].length
    })
    
    if (longestWordArr.length === 1){
        return longestWordArr[0]
    }else{
        return longestWordArr
    }


}

const output = longestWord('Hellooo there, my name is Ash.')
console.log(output)



//Split an array into chunked arrays of a specific length

function chunkArray(arr, len){
    const chunkedArr = []
    let i=0;
    while(i < arr.length){
        chunkedArr.push(arr.slice(i, i+len));
        i+=len
    };
    return chunkedArr
}

console.log(chunkArray([1,2,3,4,5,6,7], 1));


function flattenArray(arrays){
    return [].concat.apply([], arrays)
}

console.log(flattenArray([[1,2],[3,4],[5,6]]))


function isAnagram(str1, str2){
    return formatStr(str1) === formatStr(str2)
}

function formatStr(str){
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

console.log(isAnagram('dormitory', 'dirty room'))



function letterChanges(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi,function(char){
        if(char === 'z' || char === 'Z'){
            return 'a'
        }else{
            return String.fromCharCode(char.charCodeAt()+1)
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
        return vowel.toUpperCase();
    })
    return newStr;
}


console.log(letterChanges('Hello There'))