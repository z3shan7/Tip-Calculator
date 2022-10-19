const billInput = document.querySelector('.bill-input')
const customInput = document.querySelector('.custom-input')
const countInput = document.querySelector('.number-of-person')
const btns = document.querySelectorAll('.btn')
const tipDivided = document.querySelector('.tip_amount')
const totalAmount = document.querySelector('.total_amount')
const resetBtn = document.querySelector('.reset-btn')
const form = document.querySelector('form')
const customTip = document.querySelector('.custom-input')

// let total = 0
// let tip = 0
// let bill = 0
// let people = null
// resetBtn.disable = true


console.log(customInput)


const calculateTip = (e) => {
    let billValue = parseFloat(billInput.value)
    let customValue = parseFloat(customInput.value)
    billInput.value = billValue.toFixed(2)

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnValue = e.target.value
            let totalTip = parseFloat((billValue * (btnValue / 100)).toFixed(2))
            let total = parseFloat((billValue + totalTip).toFixed(2))

            let tipPerPerson = (totalTip / countInput.value).toFixed(2)
            let totalPerPerson = (total / countInput.value).toFixed(2)

            const tipDivided = document.querySelector('.tip_amount').textContent = tipPerPerson;
            const totalAmount = document.querySelector('.total_amount').textContent = totalPerPerson







        })
    })


}


billInput.addEventListener('change', calculateTip)
resetBtn.addEventListener('click', () => {
    billInput.value = ''
    countInput.value = ''
    const tipDivided = document.querySelector('.tip_amount').textContent = 0;
    const totalAmount = document.querySelector('.total_amount').textContent = 0;





})

// countInput.addEventListener('change', calculateTip)







