// J = P * i * n
/*
    J = Juros;
    p = Valor Presente, capital
    i = Taxa de juros; 0.0, = 3%
    n =  Número de períodos (meses);
*/

const valorCapital = 2000;
const taxaDeJuros = 0.03 // Igual a 3%
const totalPeriodo = 12;

const jurosTotal = valorCapital*taxaDeJuros*totalPeriodo;
console.log(`Juros no período de ${totalPeriodo} meses é de R$ ${jurosTotal}`);
