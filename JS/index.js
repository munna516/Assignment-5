// function 
function getElementByIdFunct(id) {
    const element = document.getElementById(id)
    return element
}

// function that returns the amount
function amount(id) {
    const stringTk = document.getElementById(id).innerText
    const tk = Number(stringTk)
    return tk
}

// Main Balance Calculation
function mainBalanceUpdate(newMainBalance) {
    const balance = getElementByIdFunct('main-balance')
    console.log(balance)
    balance.innerText = newMainBalance
}

// Input Balance Update
function inputBalanceUpdate(id, inputBalance) {
    const tk = amount(id)
    console.log(tk)
    const balance = getElementByIdFunct(id)
    console.log(balance)
    balance.innerText = tk + inputBalance
}

// Flood at Noakhali, Donate Now Section
document.getElementById('donate-now-1').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-field-1').value
    const mainBalance = amount('main-balance')
    const inputBalance = parseInt(inputField)
    if (isNaN(inputField) === false && parseInt(inputField) >= 0) {
        if (mainBalance < inputBalance) {
            alert("INSUFFICIENT BALANCE")
        }
        else {
            document.getElementById('input-field-1').value = ''
            const newMainBalance = mainBalance - inputBalance
            mainBalanceUpdate(newMainBalance)
            inputBalanceUpdate('donation-of-noakhali', inputBalance)
        }
    }
    else {
        alert('INVALID INPUT')

    }

})


// Flood Relief in Feni,Bangladesh
document.getElementById('donate-now-2').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-field-2').value
    const mainBalance = amount('main-balance')
    const inputBalance = parseInt(inputField)

    if (isNaN(inputField) === false && parseInt(inputField) >= 0) {
        if (mainBalance < inputBalance) {
            alert("INSUFFICIENT BALANCE")
        }
        else {
            document.getElementById('input-field-2').value = ''
            const newMainBalance = mainBalance - inputBalance
            mainBalanceUpdate(newMainBalance)
            inputBalanceUpdate('donation-of-feni', inputBalance)
        }
    }
    else {
        alert('INVALID INPUT')

    }
})


// Injured in the Quota Movement
document.getElementById('donate-now-3').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-field-3').value
    const mainBalance = amount('main-balance')
    const inputBalance = parseInt(inputField)

    if (isNaN(inputField) === false && parseInt(inputField) >= 0) {
        if (mainBalance < inputBalance) {
            alert("INSUFFICIENT BALANCE")
        }
        else {
            document.getElementById('input-field-3').value = ''
            const newMainBalance = mainBalance - inputBalance
            mainBalanceUpdate(newMainBalance)
            inputBalanceUpdate('quota-movement', inputBalance)
        }
    }
    else {
        alert('INVALID INPUT')

    }
})
