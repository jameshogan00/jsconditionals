/*

This is a banking application. This program will update your balance with your deposits and withdrawls.

-	Create 3 variables: balance, transaction, and amount.
-	The starting account balance is 1000$.
-	Ask for their transaction type (deposit, withdrawl).
-	Ask for the amount to withdraw or deposit.
-	Depending on their transaction choice either add or substract the balance. 
-	Print the new balance to the console.
*/


	var balance = 1000;
	var response = prompt('(d)eposit or (w)ithdraw');

		var amount = prompt('How much?');
		amount = parseInt(amount);
		
		if(response === 'd')
		{
			balance = balance + amount;
			console.log('You just deposited $' + amount + '.00 and your balance is $' + balance + '.00');
		}
		else
		{
			balance = balance - amount;
			console.log('You just withdrew $' + amount + '.00 and your balance is $' + balance + '.00');
		}	
	
	console.log('Thank you for ATMing with us, your balance is : $' + balance + '.00');
	
