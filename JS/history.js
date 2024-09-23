// Function getElementById
function getElementByIdFunc(id) {
    const element = document.getElementById(id)
    return element
}

// History Button Event Handling
document.getElementById('history').addEventListener('click', function () {
    // Adding color on history button
    const history = getElementByIdFunc('history')
    history.classList.add('bg-primary-color')

    // Remove Color From Donation Button
    const donation = getElementByIdFunc('donation')
    donation.classList.remove('bg-primary-color')

    // Hiding All the section
    const sections = document.querySelectorAll('section')
    console.log(sections)
    for (const section of sections) {
        section.classList.add('hidden')
    }
    document.querySelector('footer').classList.add('hidden')

    // History section displaying
    const historySection = document.getElementById('history-section')
    historySection.classList.remove('hidden')
})

// Donation Button Event Handling
document.getElementById('donation').addEventListener('click', function () {

    // Remove color from History Button
    const history = getElementByIdFunc('history')
    history.classList.remove('bg-primary-color')

    // Add color on Donation button
    const donation = getElementByIdFunc('donation')
    donation.classList.add('bg-primary-color')

    // Displaying the sections
    const sections = document.querySelectorAll('section')
    console.log(sections)
    for (const section of sections) {
        section.classList.remove('hidden')
    }
    document.querySelector('footer').classList.remove('hidden')
    
    // History section Hiding
    const historySection = document.getElementById('history-section')
    historySection.classList.add('hidden')
})
