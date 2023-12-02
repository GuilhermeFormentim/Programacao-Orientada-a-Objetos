import { Personagem } from "../super/Personagem";
import { UtilAtacar } from "../Utils/CombatUtils";
import { UtilPocao } from "../Utils/CombatUtils";

export class Mago extends Personagem {
    constructor(nome: string) {
        super(nome, 14, 8, 8, 3, 4, 8);
        //AC, vidaMax, ataque, dano, valorCura, vida
    }

    public atacar(target: any): void {
        UtilAtacar.atacar(this, target);
    }

    public usarPocao(): void {
        UtilPocao.usarPocao(this);
    }
}

