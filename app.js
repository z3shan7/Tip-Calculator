const billInput = document.querySelector('.bill-input')
const customInput = document.querySelector('.custom-input')
const countInput = document.querySelector('.number-of-person')
const btns = document.querySelectorAll('.btn')
const tipDivided = document.querySelector('.tip_amount')
const totalAmount = document.querySelector('.total_amount')
const resetBtn = document.querySelector('.reset-btn')
const form = document.querySelector('form')
const customTip = document.querySelector('.custom-input')



const calculateTip = (e) => {

    if (billInput) {
        resetBtn.disabled = false
        resetBtn.classList.add('activBtn');
    }

    let billValue = parseFloat(billInput.value)
    billInput.value = billValue
    let customValue = parseFloat(customInput.value)




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

// const customTipFun = () => {
//     let customValue = customTip.value
//     console.log(customValue)
// }



customTip.addEventListener("input", calculateTip);

billInput.addEventListener('change', calculateTip)

const clearDisplay = () => {
    billInput.value = ''
    countInput.value = ''
    const tipDivided = document.querySelector('.tip_amount').textContent = "$0.00";
    const totalAmount = document.querySelector('.total_amount').textContent = "$0.00";
    resetBtn.disabled = true

}

resetBtn.addEventListener('click', () => {


    clearDisplay()


})









