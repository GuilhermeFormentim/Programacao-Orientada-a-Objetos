import { Personagem } from "./Personagem";

export abstract class Npc {
    constructor(
        protected _nome: string,
        protected _ac: number,
        protected _vidaMax: number,
        protected _ataque: number,
        protected _dano: number,
        protected _vida: number
    ) { }

    public abstract contraAtaque(target: any): void;

    public get nome(): string {
        return this._nome;
    }

    public get ac(): number {
        return this._ac;
    }

    public get vidaMax(): number {
        return this._vidaMax;
    }

    public get vida(): number {
        return this._vida;
    }

    public set vida(vida: number) {
        this._vida = vida;
    }

    public get ataque(): number {
        return this._ataque;
    }

    public get dano(): number {
        return this._dano;
    }

    public isAlive(): boolean {
        return this._vida > 0;
    }

    public status(): string {
        return `${this._nome} ${this._vida.toFixed(0)}/${this._vidaMax} vida.`;
    }
}