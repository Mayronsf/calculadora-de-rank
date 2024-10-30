const readline = require('readline');

// Configura o readline para ler entradas do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Solicita as entradas do usuário
rl.question("Digite a quantidade de vitórias: ", (inputVitorias) => {
    const vitorias = parseInt(inputVitorias);
    rl.question("Digite a quantidade de derrotas: ", (inputDerrotas) => {
        const derrotas = parseInt(inputDerrotas);
        console.log(calcularNivel(vitorias, derrotas));
        rl.close();
    });
});
