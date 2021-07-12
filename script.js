//Você está caminhando pela floresta, cuidando da sua vida e encontra um lobo!

var lobo = prompt(
  "Você luta com ele (FIGHT), paga a ele (PAY), ou foge(RUN)?"
).toLocaleUpperCase();

switch (lobo) {
  case "FIGHT":
    var strong = prompt(
      "Que corajoso! Você é forte, sim(YES) ou não(NO)?"
    ).toLocaleUpperCase();
    var smart = prompt("Você é inteligente?").toLocaleUpperCase();

    if (strong === "YES" || smart === "Yes") {
      console.log(
        "Você precisa apenas de um dos dois! Você vence o lobo -- bom trabalho!"
      );
    } else {
      console.log(
        "Você não é forte e precisa se exercitar um pouco mais! Você perdeu -- tente novamente"
      );
    }
    break;

  case "PAY":
    var money = prompt(
      "Tudo bem, vamos pagar o lobo. Você tem dinheiro, sim(YES) ou não(NO)?"
    ).toLocaleUpperCase();
    var dolbars = prompt("Você tem dinheiro de lobo?").toLocaleUpperCase();

    if (money === "YES" && dolbars === "YES") {
      console.log("Ótimo! Você paga o lobo e continua seu passeio");
    } else {
      console.log(
        "Complicado! Este lobo só aceita dinheiro de lobo. Você não poderá continuar o passeio!"
      );
    }
    break;

  case "RUN":
    var fast = prompt(
      "Vamos dar o fora! Você é rápido, sim(YES) ou não(NO)?"
    ).toLocaleLowerCase();
    var headStart = prompt("Você começou com vantagem?").toLocaleLowerCase();

    if (fast === "YES" || headStart === "YES") {
      console.log(
        "Você conseguiu fugir -- por pouco! Você vai poder passear na fçoresta outro dia."
      );
    } else {
      console.log(
        "Você não é rápido e não começou com vantagem? Não tinha a menor chance! O lobo vence."
      );
    }
    break;
  default:
    console.log(
      "Não entendi sua escolha. Clique em Executar e tente novamente, escolhendo FIGHT, PAY, ou RUN!"
    );
}
