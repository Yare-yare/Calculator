const container = document.querySelector('.container')

/*
//creating dom elements
let cell = document.createElement('div')
cell.classList.add('cell')
container.appendChild(cell)
*/ 

//Creating functions for the calculator aka - 'The Operators'
let add = (a,b) =>{ 
    return a + b
}

let subract = (a,b) => {
    return a-b
}

let multiply = (a,b) => {
    return a*b
}

let divide = (a,b) => {
    return (a / b)
}

console.log('Addition: '+ add(10,5),'Subtraction: ' + subract(10,5),'Multiplication: ' + multiply(10,5),'Division: ' + divide(10,5))

//creating a new function called Operate that takes an operator and 2 numbers and calls one of the above function on the numbers
let operate = (a, operator, b) => { 
  if(operator === '+'){
    return add(a,b)
  }

  if(operator === '-'){
    return subract(a,b)
  }

  if(operator === '*'){
    return multiply(a,b)
  }

  if(operator === '/'){
    return divide(a,b)
  }
} 
    console.log(operate(4 ,"-", 2))


//get displayBar
const displayBar = document.querySelector('.displayBar')

//get buttons
const buttons = [...document.querySelectorAll('button')] 

//So over here, I am basically saying that for every button clicked (event.target.innerText), it's innerText becomes displayed. Hence the innerText for the displayBar becomes the innerText of the button that was clicked. 
buttons.forEach((button => {
  button.addEventListener('click',(event) => {
    displayBar.innerText = event.target.innerText  
  })
}))


/*
//stores the variable
let textStorer = (event) =>{
  storedVariable = ""
  storedVariable += event.target
  return storedVariable
}
*/
