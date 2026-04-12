let words = ["car", "apple", "banana"];

let ourarray = [
    {
        word: "car",
        level: "easy",
        hint: "something we ride to move anywhere"
    },
    {
        word: "apple",
        level: "easy",
        hint: "fruit famous with 3 colors we usually love"
    },
    {
        word: "banana",
        level: "easy",
        hint: "fruit famous with color yellow"
    },
    {
        word: "elephant",
        level: "medium",
        hint: "a very large animal with a trunk"
    },
    {
        word: "computer",
        level: "medium",
        hint: "an electronic device used for work and games"
    },
    {
        word: "guitar",
        level: "medium",
        hint: "a musical instrument with strings"
    },
    {
        word: "javascript",
        level: "hard",
        hint: "a programming language used for web development"
    },
    {
        word: "pyramid",
        level: "hard",
        hint: "a famous ancient structure found in Egypt"
    },
    {
        word: "astronaut",
        level: "hard",
        hint: "a person who travels in space"
    },
    {
        word: "chocolate",
        level: "easy",
        hint: "a sweet food loved by many people"
    }
];

// 
let span = document.createElement("span");
let todoList = document.querySelector(".for_numofindex");
// 
let reveledletter = document.createElement("p");
let myletter = document.querySelector(".forany")
// 
let hent = document.querySelector("#hentt");
let hinttext = document.createElement("p");
// 
let hangmanImage = document.querySelector("#imageee");


// 
let randomname;
let newinput = document.querySelector("#inputword")
let underscore = " ____"
let randomword;
let wordlenght;
let randomindex;
let therandomword;
let therandomhint;
let therandomwordlength;
let guessedLetters = [];
let wrongattemps = 0;
let rightattemps = 0;
let attemplimit = 6;



newinput.addEventListener("keydown", e => {
    let lowerleter = e.key
    let letter = lowerleter.toLowerCase();
    console.log(e.key);
    if (guessedLetters.includes(letter)) {
        console.log("not in the array");
    } else {
        for (let index = 0; index < therandomwordlength; index++) {
            if (therandomword[index] === letter) {
                todoList.children[index].innerText = letter + "";
                guessedLetters.push(letter);
                rightattemps++;

            }
        }
    }
    if (rightattemps === therandomwordlength) {
        reveledletter.innerText = "u got it right BRAVOO ";
        reveledletter.classList.remove("text-danger");
        reveledletter.classList.add("text-success");
        myletter.appendChild(reveledletter);
        newinput.disabled = true;
    }
    if (!guessedLetters.includes(letter)) {
        if (letter === "Backspace" || letter === "Enter" || letter === "Shift" || letter === "CapsLock" || letter === "Control" || letter === "Alt" || (letter === " ") || (letter === ",")) {
            console.log("enetr letter");
        } else {
            wrongattemps++;
            if (wrongattemps >= attemplimit) {
                reveledletter.innerText = "Game Over / the word was " + therandomword;
                hangmanImage.src = `./hangman-game-images/hangman-${wrongattemps}.svg`;
                newinput.disabled = true;
                reveledletter.classList.add("text-danger", "text-center");
                myletter.appendChild(reveledletter);

            } else {
                // HangmanImage.src ='./hangman-game-images/hangman-${wrongattemps}.svg'
                reveledletter.classList.add("text-danger", "text-center");
                myletter.appendChild(reveledletter);
                reveledletter.innerText = "Incorrect guesses " + wrongattemps + " of 6";
            }
            hangmanImage.src = `./hangman-game-images/hangman-${wrongattemps}.svg`;
        }
    }
    console.log(wrongattemps);
}
);



let createrandom = document.querySelector("#button-addon1")
let letters = document.querySelector(".input-group input")

createrandom.addEventListener("click", () => {
    newinput.disabled = false;
    newinput.value = "";
    guessedLetters = [];
    myletter.innerText = "";
    wrongattemps = 0;
    rightattemps = 0;
    todoList.innerHTML = "";
    hangmanImage.src = `./hangman-game-images/hangman-${wrongattemps}.svg`;

    randomindex = Math.floor(Math.random() * ourarray.length);
    randomname = ourarray[randomindex];
    therandomword = randomname.word;
    therandomhint = randomname.hint;
    therandomwordlength = therandomword.length;
    for (let i = 0; i < therandomwordlength; i++) {
        let span = document.createElement("span");
        span.classList.add("text-primary");
        span.innerText = underscore;
        todoList.appendChild(span);
    }
    hinttext.classList.add("text-sucsses");
    hinttext.innerText = "Hint :" + therandomhint;
    hent.appendChild(hinttext);
})




