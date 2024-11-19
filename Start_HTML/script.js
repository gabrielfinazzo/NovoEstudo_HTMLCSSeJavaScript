function pegarValor() {
    const valor = document.getElementById('numeroChute').value;
    document.getElementById('resultado').textContent = `Você digitou ${valor}`;
    
};

let chute = parseInt(valor)
let numeroSecreto = parseInt(Math.random() *10 + 1);

console.log(valor);
console.log(numeroSecreto);
