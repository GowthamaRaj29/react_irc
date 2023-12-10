const fs = require('fs');
const getPrimeOrNegativeOne = require('./primeChecker');

function printPrimesInRange(start, end) 
{
  let htmlContent = '<html><head><title>Prime Numbers</title></head><body>';

  for (let number = start; number <= end; number++) 
  {

    const result = getPrimeOrNegativeOne(number);

    if (result !== -1) 
    {
      htmlContent += `<p>${number} is a prime number.</p>`;
    }
  }

  htmlContent += '</body></html>';
  fs.writeFileSync('primeNumbers.html', htmlContent);

  console.log('Prime numbers have been written to primeNumbers.html');
}
const startRange = 1;
const endRange = 20;

printPrimesInRange(startRange, endRange);
