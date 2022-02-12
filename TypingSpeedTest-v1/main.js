// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

//Setting levels
const levels = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2,
}

// default level => normal
let defaultLevel = "Easy"
let defaultLevelSeconds = levels[defaultLevel]

//Catch Selectors
let startButton = document.querySelector('.start');

let levelSpan = document.querySelector('.message .lvl');
let secondsSpan = document.querySelector('.message .seconds');

let theWord = document.querySelector('.the-word');
let upcomingWords = document.querySelector('.upcoming-words');

let input = document.querySelector('.input')

let timeLeft = document.querySelector('.time span')
let scoreGot = document.querySelector('.score .got')
let scoreTotal = document.querySelector('.score .total')
let result = document.querySelector('.result')

// Setting levels name , score , seconds
levelSpan.innerHTML = defaultLevel;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeft.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length

//Disable Paste event
input.onpaste = ()=> false;

//Start Game

// startButton.onclick = function () {
//     this.remove()
//     input.focus()
//     // Generate word
//     genWords()
// }
document.querySelector('body').addEventListener('keydown', (e)=>{
    if (e.code === "Enter"){
        startButton.remove()
        input.focus()
        genWords()
    }
})

function genWords() {
    // get random word from array 
    let randowWord = words[Math.floor(Math.random()*words.length)];
    //Show the word
    theWord.innerHTML=randowWord
    //get word index
    let wordIndex = words.indexOf(randowWord);
    //remove word from array
    words.splice(wordIndex, 1)
    console.log(words);
    //empty upcomming words
    upcomingWords.innerHTML="";
    //generate upcomming words
    for (let i =0; i < words.length; i++){
        //create div ele
        let div = document.createElement('div');
        let txt = document.createTextNode(words[i])
        div.appendChild(txt)
        upcomingWords.appendChild(div)
    }
    //call start play function
    startPlay()
}
function startPlay() {
    //empty time left before starting 
    timeLeft.innerHTML = defaultLevelSeconds
    //satrt
    let start = setInterval(() => {
        timeLeft.innerHTML--;
        if (timeLeft.innerHTML === "0"){
            //stop time
            clearInterval(start)
            //copare words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                //change the score
                console.log("good");
                // empty input value 
                input.value = ""
                //increase score
                scoreGot.innerHTML++;
                //check if words list > 0
                if (words.length > 0){
                    // call genwords again 
                    genWords();
                }else{
                    //create span & add class name (good) to it 
                    let span = document.createElement('span');
                    span.className = "good"
                    let spanText = document.createTextNode("Congratz")
                    span.appendChild(spanText)
                    result.appendChild(span)
                    //remove upcaming words box
                    upcomingWords.remove();
                }
            }else{
                //create span & add class name (bad) to it 
                let span = document.createElement('span');
                span.className = "bad"
                let spanText = document.createTextNode("Loser!")
                span.appendChild(spanText)
                result.appendChild(span)
                //remove upcaming words box
                upcomingWords.remove();
            }
        }
    }, 1000);
}
