import { Npc } from "../super/Npc";
import { UtilContraAtaque } from "../Utils/CombatUtils";

export class EsqueletoDeFogo extends Npc {
    constructor(nome: string) {
        super(nome, 13, 12, 7, 2, 12);
        //AC, vidaMax, ataque, dano, valorCura, vida

    }

    public contraAtaque(target: any): void {
        UtilContraAtaque.contraAtaque(this, target);
    }
}