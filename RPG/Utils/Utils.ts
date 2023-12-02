import { Personagem } from "../super/Personagem";

export class Utils {
    public static roll(sides: number) {
        return Math.floor(Math.random() * sides) + 1;
    }
}

