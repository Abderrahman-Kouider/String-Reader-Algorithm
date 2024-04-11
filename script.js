var numberOfChars = 0
var numberOfWords = 0
var numberOfVowels = 0

function countSentance(str) {
    let trimmed = str.replace(/\s/g, '')
    for (let i = 0; i < trimmed.length; i++)
    numberOfChars++

    let array = str.split(' ')
    numberOfWords = array.length

    for (let i = 0; i < str.length; i++)
    if (str[i] == 'i' || str[i] == 'e' || str[i] == 'o' || str[i] == 'a' || str[i] == 'u') {
      numberOfVowels++
    } 
    console.log('This sentance has ' + numberOfChars + ' letters, ' + numberOfWords + ' words, ' + 'and ' + numberOfVowels + ' vowels.')
}

countSentance('How do you do')