import { Npc } from "../super/Npc";
import { UtilContraAtaque } from "../Utils/CombatUtils";

export class Aranha extends Npc {
    constructor(nome: string) {
        super(nome, 15, 6, 6, 1, 6);
        //AC, vidaMax, ataque, dano, valorCura, vida

    }

    public contraAtaque(target: any): void {
        UtilContraAtaque.contraAtaque(this, target);
    }
}