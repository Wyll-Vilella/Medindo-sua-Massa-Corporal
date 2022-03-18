
const calcular = document.getElementById('calcular');

function imc () {
const nome = document.getElementById('nome').value; // para buscar
const altura = document.getElementById('altura').value;
const peso = document.getElementById('peso').value;
const resultado = document.getElementById('resultado');

if(nome !== '' && altura !== '' && peso !==''){
  
  const valorIMC = (peso/(altura*altura)).toFixed(1);
 
  let classificacao = '';
  if (valorIMC < 18.5){
    classificacao = 'abaixo do peso.';
      } else if (valorIMC < 25){
        classificacao = 'com peso ideal. Meus Parabéns!';
      } else if (valorIMC <30){
        classificacao = 'Um pouco acima do peso! Comece a se cuidar!'
      }else if (valorIMC < 35){
        'Você está com Obesidade grau 1: Cuide-se'
      }else if (valor<40){
        classificacao = ' Você está com Obesidade Grau 2; Cuide-se Urgente!'
      } else {classificacao = 'Você está com Obesidade Grau 3! Cuide Urgente da Saúde, vá ao médico!'}

  resultado.textContent= `Olá ${nome} ! Seu IMC é ${valorIMC} e você está o ${classificacao}`;

} else {
  resultado.textContent = 'Preencha todos os campos!';
}
}
calcular.addEventListener('click', imc);// comando para calcular ao clicar no botão a função


