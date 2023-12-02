import { Npc } from "../super/Npc";
import { UtilContraAtaque } from "../Utils/CombatUtils";

export class Zumbi extends Npc {
    constructor(nome: string) {
        super(nome, 13, 12, 9, 1, 12);
        //AC, vidaMax, ataque, dano, valorCura, vida
    }

    public contraAtaque(target: any): void {
        UtilContraAtaque.contraAtaque(this, target);
    }
}