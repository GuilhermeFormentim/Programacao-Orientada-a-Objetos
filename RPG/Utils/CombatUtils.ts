import { Npc } from "../super/Npc";
import { Personagem } from "../super/Personagem";
import { Utils } from "../Utils/Utils";

export class UtilContraAtaque {

  public static contraAtaque(atacante: Npc, alvo: Npc) {
    console.log(`\n${atacante.nome} contra ataca ${alvo.nome}!`);
    const hit = Utils.roll(20) + atacante.ataque;
    if (hit >= alvo.ac) {
      const dano = atacante.dano;
      alvo.vida -= dano;
      console.log(`${atacante.nome} acerta ${alvo.nome} causando ${dano} de dano!`);
    } else {
      console.log(`${atacante.nome} erra ${alvo.nome}!`);
    }
  }
}

export class UtilAtacar {

  public static atacar(atacante: Personagem, alvo: Npc): void {

    console.log(`\n${atacante.nome} ataca: ${alvo.nome}!`);

    const hit = Utils.roll(20) + atacante.ataque;
    if (hit >= alvo.ac) {
      const dano = atacante.dano;
      alvo.vida -= dano;
      console.log('\x1b[46m' + `${atacante.nome} acerta ${alvo.nome} causando ${dano} de dano!` + '\x1b[0m');
    } else {
      console.log('\x1b[41m' + `${atacante.nome} erra ${alvo.nome}!` + '\x1b[0m');
    }
  }
}

export class UtilPocao {

  public static usarPocao(atacante: Personagem): void {

    console.log(`\n${atacante.nome} usa uma poção de cura!`);
    atacante.vida += atacante.valorCura;
    if (atacante.vida > atacante.vidaMax) {
      atacante.vida = atacante.vidaMax;
    }
    console.log(`\x1b[32m${atacante.nome} recupera ${atacante.valorCura} pontos de vida!\x1b[0m`);

  }
}
