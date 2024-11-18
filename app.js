alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;

let tentativas = 1;


while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

  if (chute == numeroSecreto) {
	  break;
    
  } else {
    if (chute > numeroSecreto) {
      alert(`O numero secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
	//faz com que some em +1 cada tentativa para chegar a resposta correta.
	tentativas ++;
  }
}

let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
