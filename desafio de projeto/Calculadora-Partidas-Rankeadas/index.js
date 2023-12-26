let resultadoCalculadoraPartidasRankeadas = calculadoraPartidasRankeadas(101, 0)


function calculadoraPartidasRankeadas(vitorias, derrotas) {
    let qtdRankeadas = vitorias - derrotas;
    return qtdRankeadas
}

// console.log(resultadoCalculadoraPartidasRankeadas)

switch (true) {
    case resultadoCalculadoraPartidasRankeadas <= 10:
        nivel = "Ferro"
        break;

    case resultadoCalculadoraPartidasRankeadas >= 11 && resultadoCalculadoraPartidasRankeadas <= 20: 
    nivel = "Bronze"
    break;

    case resultadoCalculadoraPartidasRankeadas >= 21 && resultadoCalculadoraPartidasRankeadas <= 50: 
    nivel = "Prata"
    break;

    case resultadoCalculadoraPartidasRankeadas >= 51 && resultadoCalculadoraPartidasRankeadas <= 80: 
    nivel = "Ouro"
    break;

    case resultadoCalculadoraPartidasRankeadas >= 81 && resultadoCalculadoraPartidasRankeadas <= 90: 
    nivel = "Diamante"
    break;

    case resultadoCalculadoraPartidasRankeadas >= 91 && resultadoCalculadoraPartidasRankeadas <= 100: 
    nivel = "Lendário"
    break;

    case resultadoCalculadoraPartidasRankeadas >= 101:
    nivel = "Imortal"
    break;
};

console.log(`O Herói tem saldo de ${resultadoCalculadoraPartidasRankeadas} está no nível ${nivel}.`)
