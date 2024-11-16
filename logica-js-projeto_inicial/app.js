alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1; 

// Emquanto o chute não for igual (!=) ao número secreto
while (numeroSecreto != chute) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (numeroSecreto == chute) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`); 
    /* alert('O número secreto era ' + numeroSecreto + 'teste')  */
    } else  {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}


