document.getElementById('donate-button').addEventListener('click', function (event) {
   event.preventDefault()

   const inputNumber = parseFloat(document.getElementById('donation-amount').value)
   // const balance = parseFloat(document.getElementById('fixed-balance').innerText)
   const newBalance = parseFloat(document.getElementById('donate-new-balance').innerText)
   if (inputNumber === 'number') {

      const perfectBalance = balance - inputNumber
      const donateBalance = newBalance + inputNumber
      document.getElementById('fixed-balance').innerText = perfectBalance

      document.getElementById('fixed-balance').innerText = donateBalance
   }
   else if (inputNumber !== 'number' && inputNumber === 'string' && inputNumber < 0){
      alert ('invalid Input ! please put a valid amount')
   }
   
   

})