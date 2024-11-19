alert('Bem vindo ao jogo do número desconhecido.')
let chute;
let tentativas = 1;
let intervaloNumérico = 10;
let numeroAleatorio = parseInt(Math.random() * intervaloNumérico + 1);
console.log(numeroAleatorio);

while (chute !== numeroAleatorio) {
    chute = parseInt(prompt(`Digite um número entre 1 e ${intervaloNumérico}:`));
    if (numeroAleatorio === chute) {
        break;
        
    } else {
        if (chute > numeroAleatorio) {
            alert(`O número ${chute} é maior que o número desconhecido.`);
        } else {
            alert(`O número ${chute} é menor que o número desconhecido.`);
        };    
        tentativas++;
    };
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`O número desconhecido foi ${numeroAleatorio} e você acertou com ${tentativas} ${palavraTentativas}. Parabéns!`);

