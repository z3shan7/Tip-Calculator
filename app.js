const billInput = document.querySelector('.bill-input')
const customInput = document.querySelector('.custom-input')
const countInput = document.querySelector('.number-of-person')
const btns = document.querySelectorAll('.btn')
const tipPerPerson = document.querySelector('.tip_amount')
const totalAmount = document.querySelector('.total_amount')
const resetBtn = document.querySelector('.reset-btn')
const form = document.querySelector('form')
const customTip = document.querySelector('.custom-input')

let total = 0
let tip = 0
let bill = 0
let people = null
resetBtn.disable = true

const tipCalc = (e) => {
    if ((bill != 0 && bill != null) && (people = ! null && people != 0)) {
        totalAmount.textContent = `$${((bill + (bill / 100 * tip)) / people).toFixed(2)}`
        tipPerPerson.textContent = `$${((bill / 100 * tip) / people).toFixed(2)}`
    }
}


const billInputUpdate = (e) => {
    let value = parseFloat(e.target.value)
    if (value < 0) {
        e.target.value = null

    } else {
        bill = value
    }
    tipCalc()

}

const peopleInputFun = (e) => {
    // error.textContent = "";
    let value = parseInt(e.target.value);
    if (value < 0) {
        e.target.value = null

    } else {
        people = value
    }
    tipCalc()


}

const customTipFun = (e) => {
    let value = parseFloat(e.target.value)
    if (value < 0) {
        e.target.value = null

    } else {
        tip = value
    }
    if (tip < 0)
        e.target.value = null
    tipCalc()


}



billInput.addEventListener('change', billInputUpdate)
countInput.addEventListener('change', peopleInputFun)
customInput.addEventListener('change', customTipFun)



btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText
        console.log(value)







    })
})





// billInput.addEventListener('input', billInputFun)
// countInput.addEventListener('input', peopleInputFun)

// btns.forEach((btn) => {
//     btn.addEventListener('click', handleClick)
// })

// customTip.addEventListener('click', customTipFun)
// resetBtn.addEventListener('click', reset)


// billInput.value = "";
// countInput.value = "";
// tipPerPerson.innerHTML = "$" + (0.0).toFixed(2)
// totalAmount.innerHTML = "$" + (0.0).toFixed(2)

// let billValue = 0.0;
// let peopleValue = 1;
// let tipValue = 0.15;

// function billInputFun() {
//     billValue = parseFloat(billInput.value)
//     calculateTip()


// }
// function peopleInputFun() {
//     peopleValue = parseFloat(countInput.value)

//     calculateTip()

// }


// function customTipFun() {
//     tipValue = parseFloat(customTip.value / 100);
//     calculateTip()
// }
// function handleClick(e) {
//     btns.forEach((btn) => {
//         if (e.target.innerHTML === btn.innerHTML) {
//             tipValue = parseFloat(btn.innerHTML) / 100
//         }
//     })
//     calculateTip()

// }

// function calculateTip() {
//     if (peopleValue >= 0) {
//         let tipAmount = (billValue * tipValue) / peopleValue
//         let total = (billValue * tipAmount) / peopleValue
//         tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2)
//         totalAmount.innerHTML = "$" + total.toFixed(2)

//     }
// }

// function reset() {
//     billInput.value = "";
//     // billInputFun()
//     countInput.value = "";
//     // peopleInputFun()
//     customTip.value = "";
//     countInput.value = "";

// }


