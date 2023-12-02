import { Npc } from "../super/Npc";
import { UtilContraAtaque } from "../Utils/CombatUtils";

export class Lobo extends Npc {
    constructor(nome: string) {
        super(nome, 14, 10, 9, 2, 10);
        //AC, vidaMax, ataque, dano, valorCura, vida

    }

    public contraAtaque(target: any): void {
        UtilContraAtaque.contraAtaque(this, target);
    }
}