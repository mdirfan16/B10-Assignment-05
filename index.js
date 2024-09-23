document.getElementById('donate-button').addEventListener('click', function () {

   const inputNumber = parseFloat(document.getElementById('donate-amount').value)
   const balance = parseFloat(document.getElementById('fixed-balance').innerText)
   if (inputNumber === 'number') {


      const newBalance = parseFloat(document.getElementById('donate-new-balance').innerText)
      const perfectBalance = balance - inputNumber
      document.getElementById('fixed-balance').innerText = perfectBalance
   }
   else if (inputNumber !== 'number' && inputNumber === 'string' && inputNumber < 0){
      alert ('invalid Input ! please put a valid amount')
   }
   
   

})