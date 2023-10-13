const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePythagoras () {
  rl.question('Podaj długość pierwszej przyprostokątnej (a): ', (aStr) => {
    const a = parseFloat(aStr);

    rl.question('Podaj długość drugiej przyprostokątnej (b): ', (bStr) => {
      const b = parseFloat(bStr);

      if (isNaN(a) || isNaN(b)) {
        console.log('Podane wartości są nieprawidłowe. Wprowadź liczby.');
        rl.close();
        return;
      }

      const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      console.log(`Długość trzeciego boku wynosi: ${c}`);

      rl.close();
    });
  });
}

console.log('Obliczanie trzeciego boku trójkąta za pomocą twierdzenia Pitagorasa.');
calculatePythagoras();