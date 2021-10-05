let input = "Smooth@Greetings Testing TestinAgain$teeeeeeeeeeeeeeeeeeeeest"

let newArray = []

function countChars (string) {
    let splitWord = string.split('')
    return new Set(splitWord).size;
}

function parseString (string) {
    let breakit = string.split(/[^a-zA-Z]/)
    let nonAlpha = string.split(/[a-zA-Z]/).filter(n => n)
    for (let i = 0; i < breakit.length; i++) {
        let length = breakit[i].length
        let firstChar = breakit[i].charAt(0) 
        let lastChar = breakit[i].charAt(length - 1)
        let middleInt = countChars(breakit[i].slice(1,-1))
        let newString = firstChar + middleInt + lastChar
        newArray.push(newString)
        nonAlpha[i] && newArray.push(nonAlpha[i])
    }
}

parseString (input)
console.log(newArray.join(''))