const guessNumber = (a) => {
    let rightAnswer = Math.random() * 10;
    rightAnswer = Math.round(rightAnswer)
    if(a === rightAnswer) console.log('yes')
    else console.log(`no, the correct anser is ${rightAnswer}`)
}

guessNumber(5);