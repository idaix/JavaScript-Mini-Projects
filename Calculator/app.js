class Calculator{
    constructor(prevEl, currentEl){
        this.prevEl = prevEl;
        this.currentEl = currentEl;
        this.clear()
    }
    clear(){
        this.prev = ''
        this.current = ''
        this.operation = undefined
    }
    delete(){
        this.current = this.current.toString().slice(0, -1)
    }
    appendNumber(number){
        if (number == '.' && this.current.includes('.')) return
        this.current = this.current + number.toString()
    }
    choseOperation(operation){
        //check if we do have numbers to calculate
        if (this.current === '') return
        if(this.current !== ''){
            //make calculation...
            this.compute()

        }
        //after calculation update screen
        this.operation = operation
        this.prev = this.current
        this.current = ''
    }
    compute(){
        let result
        const x = parseFloat(this.prev)
        const y = parseFloat(this.current)

        if(isNaN(x) || isNaN(y))return
        switch(this.operation){
            case "+":
                result = x + y
                break
            case "-":
                result = x - y
                break
            case "x":
                result = x * y
                break
            case "/":
                result = x / y
                break
            default:
                return
        }
        //update screen
        this.current = result
        this.operation = undefined
        this.prev = ''
    }
    updateDisplay(){
        this.currentEl.innerText = this.current
        if(this.operation != null ){
            this.prevEl.innerText = `${this.prev} ${this.operation}`
        }
    }

}

//======================GET ELEMENTS FROM HTML=========================
//Buttons:
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
//Screen:
const prevEl = document.querySelector('[data-prev]')
const currentEl = document.querySelector('[data-current]')
//=====================================================================

//===> Create calculator <=============================================
const calculator  = new Calculator(prevEl, currentEl)

//N U M B E R S
numberButtons.forEach( button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
//O P E R A T I O N S
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.choseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
//E Q U A L
equalButton.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})
//C L E A R
clearButton.addEventListener('click', ()=>{
    calculator.clear()
    calculator.updateDisplay()
})
//D E L E T E 
deleteButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})