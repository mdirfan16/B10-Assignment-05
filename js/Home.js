document.getElementById('donate-button').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('failed to donate your amount ! please try again')
   }





})





document.getElementById('donate-button-2').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount-2').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance-2').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance-2').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('failed to donate your amount ! please try again')
   }
   
})



document.getElementById('donate-button-3').addEventListener('click', function (event) {
   event.preventDefault();

   const inputDonate = parseFloat(document.getElementById('donation-amount-3').value);
   const fixedBalance = parseFloat(document.getElementById('fixed-balance').innerText)
   
   if (inputDonate !== 'string' && inputDonate >0) {
      const donateNewBalance = parseFloat(document.getElementById('donate-new-balance-3').innerText);
      const newBalanceDonation =  inputDonate + donateNewBalance;
      document.getElementById('donate-new-balance-3').innerText = newBalanceDonation;

      const newMainBalance = fixedBalance - inputDonate ;
      document.getElementById('fixed-balance').innerText = newMainBalance ;
   }

   else {
      alert ('failed to donate your amount ! please try again')
   }

})








