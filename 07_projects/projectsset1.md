# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("himanshu")
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( function (button) {
  console.log(button);
  button.addEventListener('click', function(e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## project 2

```javascript
const form = document.querySelector('form')
// this usecase will give you empty 
// const height = parseFloat(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
  e.preventDefault()

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if( h === '' || h < 0 || isNaN(h)) {
    results.innerHTML = `Please give a valid height ${h}`;
    return;
  }
  else if( w === '' || w < 0 || isNaN(w)) {
    results.innerHTML = `Please give a valid weight ${w}`;
    return;
  } else {
    const bmi = (w/((h*h)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
    const newli = document.createElement('h1')
    if(bmi<18.6){
      newli.innerHTML = 'you are underweight'
    }
    else if(bmi>24.9){
      newli.innerHTML = 'you are overweight'
    }
    else {
      newli.innerHTML = 'you are normal'
    }
    results.appendChild(newli)
    }

});

```

## project 3

```javascript
const clock = document.getElementById('clock')

setInterval( function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame) {
  submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess) {
  if(isNaN(guess)) {
    alert('Please enter a valid number.')
  }
  else if(guess < 1 ) {
    alert('Please enter a number more than 1.')
  }
  else if(guess > 100) {
    alert('Please enter a number less than 100.')
  } else {
    prevGuess.push(guess)

    if(numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }

}

function checkGuess(guess) {
  if(guess == randomNumber) {
    displayMessage(`You guesses it right`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame= false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e) {
    randomNumber = (parseInt(Math.random() * 100 + 1));
    console.log(randomNumber);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    lowOrHi.textContent = ''
    remaining.innerHTML = `${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)

    playGame = true;

  })
}

```

## project 6 (Async)

```javascript
const body = document.querySelector('body')
const Start = document.getElementById('start')
const Stop = document.getElementById('stop')


// generate a random color
const randomColor = function() {
  const hex = '0123456789ABCDEF';
  let color = '#'
  for(let i = 0; i < 6 ; i++) {
    color += hex[Math.floor(Math.random()* 16)];
  }
  return color;
}


let interValId;
const startChangingColor = function() {
  if(!interValId) {
    interValId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    body.style.backgroundColor = randomColor()
  }
};

const stopChangingColor = function() {
  clearInterval(interValId);
  interValId = null;
}

Start.addEventListener('click', startChangingColor);
Stop.addEventListener('click', stopChangingColor);

```

