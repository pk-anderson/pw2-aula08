//Questão 1

class Animal {
  #nome: string;
  #caracteristicas: string[];

  constructor(nome: string, caracteristicas: string[]) {
    this.#nome = nome;
    this.#caracteristicas = caracteristicas;
  }

  exibirAnimal(): void {
    console.log(`Nome do animal: ${this.#nome}`);
  }

  cadastrar(caracteristica: string): void {
    this.#caracteristicas.push(caracteristica);
  }

  exibirCaracteristica(): string {
    const randomIndex = Math.floor(Math.random() * this.#caracteristicas.length);
    return this.#caracteristicas[randomIndex];
  }
}

// Teste da classe Animal
const leao = new Animal("Leão", ["Vive em bando"]);
leao.exibirAnimal(); // Saída esperada: Nome do animal: Leão
leao.cadastrar("Carnívoro");
console.log(leao.exibirCaracteristica());

//Questão 2

interface FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  readonly tutor?: string;
}

class Filhote implements FilhoteInterface {
  readonly cores: string[];
  readonly pelagem: number;
  readonly tutor?: string;

  constructor(cores: string[], pelagem: number) {
    this.cores = cores;
    this.pelagem = pelagem;
  }

  adotar(tutor: string): void {
    this.tutor = tutor;
  }
}

const filhote = new Filhote(["Preto", "Branco"], 5);
console.log(filhote.cores); 
console.log(filhote.pelagem);
console.log(filhote.tutor); 
filhote.adotar("João");
console.log(filhote.tutor); 

//Questão 3

type ComidaDePet = 'insetos' | 'frutas' | 'plantas' | 'sementes' | 'vegetais';

abstract class PequenoRoedor {
  readonly especie: string;
  felicidade = 0;

  constructor(especie: string) {
    this.especie = especie;
  }

  abstract comer(comida: ComidaDePet): boolean;

  estaFeliz(): boolean {
    return this.felicidade > 0;
  }
}

class Furao extends PequenoRoedor {
  constructor() {
    super('Furão');
  }

  cavar(): void {
    this.felicidade++;
  }

  comer(comida: ComidaDePet): boolean {
    return comida === 'insetos' || comida === 'plantas' || comida === 'sementes' || comida === 'vegetais';
  }
}

class Hamster extends PequenoRoedor {
  constructor() {
    super('Hamster');
  }

  correr(): void {
    this.felicidade++;
  }

  comer(): boolean {
    return true;
  }
}

const furao = new Furao();
const hamster = new Hamster();

console.log(furao.especie); 
console.log(hamster.especie); 

console.log(furao.comer('insetos'));
console.log(furao.comer('frutas')); 

console.log(hamster.comer()); 

furao.cavar();
hamster.correr();

console.log(furao.estaFeliz()); 
console.log(hamster.estaFeliz()); 
