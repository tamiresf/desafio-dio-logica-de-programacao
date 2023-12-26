

let nivel = "";
let nomeHeroi = "Capitão Luminar"
let qtdXP = 10.001;

switch (true) {
    case qtdXP <= 1.000:
        nivel = "Ferro"
        break;

    case qtdXP >= 1.001 && qtdXP <= 2.000: 
    nivel = "Bronze"
    break;

    case qtdXP >= 2.001 && qtdXP <= 5.000: 
    nivel = "Prata"
    break;

    case qtdXP >= 6.001 && qtdXP <= 7.000: 
    nivel = "Ouro"
    break;

    case qtdXP >= 7.001 && qtdXP <= 8.000: 
    nivel = "Platina"
    break;

    case qtdXP >= 8.001 && qtdXP <= 9.000: 
    nivel = "Ascendente"
    break;

    case qtdXP >= 9.001 && qtdXP <= 10.000: 
    nivel = "Imortal"
    break;

    case qtdXP >= 10.001:
    nivel = "Radiante"
    break;
}

console.log(`O Herói de ${nomeHeroi} está no nível ${nivel}.`)