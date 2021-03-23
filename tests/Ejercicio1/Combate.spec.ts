import 'mocha';
import {expect} from 'chai';
import {MarvelFighter} from './MarvelFighter';
import {PokemonFighter} from './PokemonFighter';
import {DragonBallFighter} from './DragonBallFighter';

const pikachu = new PokemonFighter("Pikachu", 100, 1000, 300, 500,
    "Pika pika, pikachuuu!!!", "electrico");
const thor = new MarvelFighter("Thor", 100, 1000, 300, 500,
    "¡Yo soy Thor, hijo de Odín! ¡Dios del trueno y heredero de Asgard!",
    "Dios del trueno");
const goku = new DragonBallFighter("Goku", 100, 1000, 300, 500,
    "Disculpa, vi que bajaste la guardia y simplemente ataque, ¡ja!",
    "Sayayin");

const combate1 = new Combat(pikachu, thor);
const combate2 = new Combat(pikachu, goku);
const combate3 = new Combat(goku, thor);
