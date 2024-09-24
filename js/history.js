
const history = document.getElementById('history').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('history').classList.add('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('donation').classList.remove('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('donation').classList.add('border-2', 'px-5', 'py-2', 'rounded-lg')


    document.getElementById('input').classList.add('hidden')
    document.getElementById ('history-section').classList.remove('hidden')

})

const donation = document.getElementById('donation')
donation.addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('input').classList.remove('hidden')

    document.getElementById('donation').classList.add('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('history').classList.remove('bg-lime-400', 'px-5', 'py-2', 'rounded-lg',
        'font-bold', 'text-black', 'text-xl')

    document.getElementById('history').classList.add('border-2', 'px-5', 'py-2', 'rounded-lg')
    document.getElementById ('history-section').classList.add('hidden')



})




document.getElementById('dona')

// const inputAmount = document.getElementById('donate-amount').value;
// const inputAmount2 = document.getElementById('donate-amount-2').value;
// const inputAmount3 = document.getElementById('donate-amount-3').value;



// const historyItem = document.createElement('div')
// historyItem.className = 'bg-white border-2 p-3 rounded-md';
// historyItem.innerHTML = `
// <p class ="text-xl text-black font-bold">${inputAmount2.toFixed(2)} fghjkljhgfdsfghjkljhgfdsas gfhjk</p>
// <p class ="text-xl text-black font-bold">${new Date(). toLocaleDateString() }</p>


// `;

// const historyContainer = document.getElementById('history-list');
// historyContainer.insertBefore(historyItem, historyContainer.firstChild);


