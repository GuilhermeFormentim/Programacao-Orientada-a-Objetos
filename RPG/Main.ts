import prompt from 'prompt-sync';
import { Personagem } from './super/Personagem';
import { Npc } from './super/Npc';
import { Draconato } from './herois/Draconato';
import { Mago } from './herois/Mago';
import { Aranha } from './monstros/Aranha';
import { EsqueletoDeFogo } from './monstros/EsqueletoDeFogo';
import { Lobo } from './monstros/Lobo';
import { Zumbi } from './monstros/Zumbi';

const teclado = prompt();

const herois: Personagem[] = [new Draconato("Otanocrad"), new Mago("Ogam")];
const inimigos: Npc[] = [new Aranha("Aranha"), new Lobo("Lobo"), new Zumbi("Zumbi"), new EsqueletoDeFogo("Esqueleto de Fogo")];

console.log('\x1b[44m\x1b[30mEscolha seu Herói:🦸‍♂️ \x1b[0m');

herois.forEach(heroi => {
    console.log(`\x1b[47m\x1b[30m ${herois.indexOf(heroi) + 1} - ${heroi.nome} \x1b[0m\n`);

    console.log(`\x1b[31mCA: ${heroi.ac}\x1b[0m\n\x1b[32mVida:${heroi.vida}\x1b[0m \n\x1b[33mDano: ${heroi.dano}\x1b[0m\n\x1b[34mAtaque: +${heroi.ataque}\x1b[0m\n\x1b[35mPoder de cura: ${heroi.valorCura}\x1b[0m\n`);
});

let selecionaHeroi: number = +teclado("Escolha um nº: ");
let player: Personagem = herois[selecionaHeroi - 1];

do {
    console.log('\x1b[47m\x1b[30m O que você quer fazer?\x1b[0m');
    console.log("\n1. Caçar 💀 \n2. Curar ❤️ \n3. Fugir 💨");

    let escolha: number = +teclado("> ");

    if (escolha === 1) {
        let inimigo = inimigos[Math.floor(Math.random() * inimigos.length)];
        console.log(`\n${player.nome} encontrou um ${inimigo.nome}`);

        while (player.vida > 0 && inimigo.vida > 0 && inimigos.length > 0) {
            console.log("\n1. Atacar 🔪");
            console.log("2. Fugir 🫣");
            let escolha: number = +teclado("> ");

            if (escolha === 1) {
                player.atacar(inimigo);
                if (inimigo.vida > 0) {
                    inimigo.contraAtaque(player);
                    console.log(`\x1b[32m ${player.status()} 🖤\x1b[0m`);
                    console.log(`\x1b[31m ${inimigo.status()} 🖤\x1b[0m`);
                }
            } else if (escolha === 2) {
                console.log("\nFugiu igual um: 💩");
                break;
            }
        }

        if (inimigo.vida <= 0) {
            console.log(`\n\x1b[31m${inimigo.nome} foi derrotado!\x1b[0m`);
            inimigos.splice(inimigos.indexOf(inimigo), 1);
        } else if (player.vida <= 0) {
            console.log(`\x1b[31m Perdeu! ${player.nome} foi derrotado!\x1b[0m`);
        }

    } else if (escolha === 2) {
        player.usarPocao(player)
    } else if (escolha === 3) {

        console.log('\x1b[45m\x1b[37m' + `Como é rapido, seu covarde!💩` + '\x1b[0m');

        break;
    } else {
        console.log("Corra para se salvar!💩");
    }
} while (inimigos.length > 0 && player.vida > 0);

if (player.vida > 0 && inimigos.length === 0) {
    console.log(`\x1b[32m Parabéns! ${player.nome} aniquilou todos os inimigos!\x1b[0m`);
}


//console.log('\x1b[31mTexto vermelho\x1b[0m');
// console.log('\x1b[32mTexto verde\x1b[0m');
// console.log('\x1b[33mTexto amarelo\x1b[/0m');
// console.log('\x1b[34mTexto azul\x1b[/0m' /);
// console.log('\x1b[35mTexto magenta\x/1b[/0m');
// console.log('\x1b[36mTexto ciano\x1b/[0m/');
// console.log('\x1b[37mTexto branco\x1/b[0/m');

// console.log('\x1b[41m\x1b[37mTexto com fundo vermelho\x1b[0m');
// console.log('\x1b[42m\x1b[30mTexto com fundo verde\x1b[0m');
// console.log('\x1b[43m\x1b[34mTexto com fundo amarelo\x1b[0m');