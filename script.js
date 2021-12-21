 /*
Objetivo: Calcular valor hora 

Passo 1: Pegar o valor digitado no campo Quantidade por mes
Passo 2: Pegar o valor digitado no campo Horas por dia
Passo 3: Clicar em Calcular
Passo 4: Calcular 
Passo 5: Mostrar o resultado em Seu Valor por Hora


Identificação:
ganho-mes 
horas-dia 
onclick="calcularValorHora()" 
ganho-mes/ horas-dia 
resposta
*/

var salario = document.querySelector('#ganho-mes');
var horasTrabalhadas = document.querySelector('#horas-dia');
var resposta = document.querySelector('#resposta');

function calcularValorHora(){
var horasUteis = horasTrabalhadas.value * 21;
var valorFinal = (salario.value / horasUteis).toFixed(2);

resposta.textContent = 'R$' + valorFinal;
}
