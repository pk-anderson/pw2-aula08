import {Animal, Filhote, Furao, Hamster} from './functions'

//Questão 1

const leao = new Animal("Leão", ["Vive em bando"]);
leao.exibirAnimal(); 
leao.cadastrar("Carnívoro");
console.log(leao.exibirCaracteristica());

//Questão 2

const filhote = new Filhote(["Preto", "Branco"], 5);
console.log(filhote.cores); 
console.log(filhote.pelagem);
console.log(filhote.tutor); 
filhote.adotar("João");
console.log(filhote.tutor); 

//Questão 3

const furao = new Furao();
const hamster = new Hamster();

console.log(furao.comer('insetos'));
console.log(hamster.comer("frutas")); 

furao.cavar();
hamster.correr();

console.log(furao.estaFeliz()); 
console.log(hamster.estaFeliz()); 
