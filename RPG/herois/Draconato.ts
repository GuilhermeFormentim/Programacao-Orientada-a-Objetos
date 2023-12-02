import { Personagem } from "../super/Personagem";
import { UtilAtacar } from "../Utils/CombatUtils";
import { UtilPocao } from "../Utils/CombatUtils";

export class Draconato extends Personagem {
    constructor(nome: string) {
        super(nome, 16, 12, 8, 5, 6, 12);
        //AC, vidaMax, ataque, dano, valorCura, vida
    }

    public atacar(target: any): void {
        UtilAtacar.atacar(this, target);
    }

    public usarPocao(): void {
        UtilPocao.usarPocao(this);
    }
}