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

    balance.innerText = newMainBalance
}

// Input Balance Update
function inputBalanceUpdate(id, inputBalance) {
    const tk = amount(id)
    const balance = getElementByIdFunct(id)
    balance.innerText = tk + inputBalance
}

// History Add Function
function historyAdd(balance, id) {
    const div = document.createElement('div')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const text = document.getElementById(id).innerText
    p1.innerText = `${balance} TK is ${text}`

    // Finding live time 
    const now = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const dayName = daysOfWeek[now.getDay()];
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    p2.innerText = `Date : ${dayName} ${date} ${time} GMT +0600 (Bangladesh Standard Time)`

    // class add
    p1.classList.add('text-xl', 'font-semibold', 'text-color-1')
    p2.classList.add('text-color-2', 'text-normal')
    div.classList.add('p-8', 'border', 'border-gray-300', 'rounded-lg', 'space-y-3')
    div.appendChild(p1)
    div.appendChild(p2)
    document.getElementById('history-section').appendChild(div)

}

// Flood at Noakhali, Donate Now Section
document.getElementById('donate-now-1').addEventListener('click', function (event) {
    const inputField = document.getElementById('input-field-1').value
    const mainBalance = amount('main-balance')
    const inputBalance = parseInt(inputField)

    if (isNaN(inputField) === false && parseInt(inputField) >= 0) {
        if (mainBalance < inputBalance) {
            alert("INSUFFICIENT BALANCE")
            return false
        }
        else {
            document.getElementById('input-field-1').value = ''
            const newMainBalance = mainBalance - inputBalance
            mainBalanceUpdate(newMainBalance)
            inputBalanceUpdate('donation-of-noakhali', inputBalance)
            historyAdd(inputBalance, 'history-1')
            const modal_1 = document.getElementById('my_modal_1')
            modal_1.showModal()
        }
    }
    else {
        alert('INVALID INPUT')
        return

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
            historyAdd(inputBalance, 'history-2')
            const modal_2 = document.getElementById('my_modal_2')
            modal_2.showModal()
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
            historyAdd(inputBalance, 'history-3')
            const modal_5 = document.getElementById('my_modal_5')
            modal_5.showModal()
        }
    }
    else {
        alert('INVALID INPUT')

    }
})
