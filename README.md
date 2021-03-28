# **PRÁCTICA 4 - ARRAYS TUPLAS Y ENUMERADOS**



## **OBJETIVO DE LA PRÁCTICA**
El objetivo de la práctica consiste en realizar una serie de problemas propuestos y resolverlos usando TypeScript para familiarizarnos con el lenguaje y su funcionamiento.

En esta práctica nos centraremos especialmente en las clases e interfaces. Que serán necesarios para poder realizar cada uno de los ejercicios. 



## **EJERCICIOS**


### **Ejercicio 1 - Pokedex**

#### **Enunciado**:
Lleve a cabo todos y cada uno de los ejercicios propuestos a continuación. Dado que vamos a trabajar con clases y que, probablemente, cada ejercicio implique el desarrollo de diferentes clases, el código fuente de cada ejercicio deberá estar alojado en un directorio independiente con nombre ejercicio-n/ dentro del directorio src/ de su proyecto. Dentro del directorio correspondiente a cada ejercicio, esto es, dentro del directorio ejercicio-n, incluya cada clase desarrollada en un fichero independiente.

Incluya la documentación de sus clases mediante el uso de TypeDoc y adopte una metodología de desarrollo dirigido por pruebas/comportamiento. Tenga en cuenta que seguir la metodología TDD o BDD implica confirmar el correcto funcionamiento del código desarrollado, así como los casos en los que dicho código debería informar de un error cuando la entrada no sea la correcta (errors should never pass silently). En consecuencia, desarrolle pruebas unitarias que comprueben el correcto funcionamiento del código y, además, incluya otras pruebas unitarias que verifiquen que el software es robusto ante entradas no válidas o inesperadas.


#### **Desarrollo**:
Para este ejercicio hemos tenido que crear varias clases y un tipo. EL tipo ha sido `Pokemon`. Que define a un pokemon y todos sus atributos, velocidad, ataque, defensa, vida...

```typescript
export type Pokemon = {
  name: string;
  type: string;
  attack: number;
  defense: number;
  speed: number;
  health: number;
}
```

Luego hemos creado la clase `Pokedex`. Esta clase se encargará de almacenar pokemons y mostrar aquellos que ya hayan sido almacenados. Dispone de un método store que almacena un objeto del tipo `Pokemon`, un método `getByName` que recibe el nombre de un pokemon y devuelve el pokemon y sus estadísticas si lo encuentra en la pokedex. Y un método `find` que busca un pokemon completo.

```typescript
export class Pokedex {
  private pokemonArray: Pokemon[] = [];

  public store(pokemon: Pokemon) {
    this.pokemonArray.push(pokemon);
  }

  public getByName(pokemonName: string): Pokemon {
    let returnValue: Pokemon = {name: "", type: "", attack: 0, defense: 0,
      speed: 0, health: 0};
    this.pokemonArray.forEach((pokemon) => {
      if (pokemon.name === pokemonName) {
        returnValue = pokemon;
      }
    });
    return returnValue;
  }

 find(pokemon2Find: Pokemon): boolean {
    let returnValue: boolean = false;
    this.pokemonArray.forEach((pokemon) => {
      if (pokemon === pokemon2Find) {
        returnValue = true;
      }
    });
    return returnValue;
  }
}
```

Por último hemos creado la clase combat que simula el combate entre dos pokemons. Esta clase recibe dos pokemons como argumento y simula el combate. Para ello dispone de dos funciones. La función `start`que inicia el combate y entra en un bucle hasta que alguno de los pokemons se quede sin vida y la función `attackDamage` que calcula el daño que un pokemon hace al atacar a otro.

```typescript
export class Combat {
  private pokemon1: Pokemon;
  private pokemon2: Pokemon;

  constructor(pok1: Pokemon, pok2: Pokemon) {
    if (pok1.speed >= pok2.speed) {
      this.pokemon1 = pok1;
      this.pokemon2 = pok2;
    } else {
      this.pokemon2 = pok1;
      this.pokemon1 = pok2;
    }
  }

  public start(): Pokemon {
    console.log(
        `Starting combat between ${this.pokemon1.name} and `,
        `${this.pokemon2.name}\n`,
    );
    while ((this.pokemon1.health > 0) && (this.pokemon2.health > 0)) {
      let attackResult: number = Math.floor(
          this.attackDamage(this.pokemon1, this.pokemon2));
      this.pokemon2.health -= attackResult;
      console.log(
          `${this.pokemon1.name} attacked ${this.pokemon2.name} and dealt `,
          `${attackResult} of damage!\n${this.pokemon2.name} hp reduced to `,
          `${this.pokemon2.health}\n`,
      );
      if (this.pokemon2.health <= 0) {
        break;
      }

      attackResult = Math.floor(
          this.attackDamage(this.pokemon2, this.pokemon1));
      this.pokemon1.health -= attackResult;
      console.log(
          `${this.pokemon2.name} attacked ${this.pokemon1.name} and dealt `,
          `${attackResult} of damage!\n${this.pokemon1.name} hp reduced to `,
          `${this.pokemon1.health}\n`,
      );
    }
    console.log(
        `Combat ended!`,
    );
    if (this.pokemon1.health <= 0) {
      return this.pokemon2;
    } else {
      return this.pokemon1;
    }
  }

  private attackDamage(pokemon1: Pokemon, pokemon2: Pokemon): number {
    switch (pokemon1.type) {
      case 'fuego': {
        switch (pokemon2.type) {
          case 'fuego': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          case 'agua': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          case 'hierba': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 2;
          }
          default: {
            return 50 * (pokemon1.attack / pokemon2.defense);
          }
        }
      }
      case 'agua': {
        switch (pokemon2.type) {
          case 'fuego': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 2;
          }
          case 'agua': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          case 'hierba': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          case 'electrico': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          default: {
            return 50 * (pokemon1.attack / pokemon2.defense);
          }
        }
      }
      case 'hierba': {
        switch (pokemon2.type) {
          case 'fuego': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          case 'agua': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 2;
          }
          case 'hierba': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          default: {
            return 50 * (pokemon1.attack / pokemon2.defense);
          }
        }
      }
      case 'electrico': {
        switch (pokemon2.type) {
          case 'agua': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 2;
          }
          case 'electrico': {
            return 50 * (pokemon1.attack / pokemon2.defense) * 0.5;
          }
          default: {
            return 50 * (pokemon1.attack / pokemon2.defense);
          }
        }
      }
      default: {
        return 50 * (pokemon1.attack / pokemon2.defense);
      }
    }
  }
}
```



### **Ejercicio 2 - Gestor bibliográfico**

#### **Enunciado**:
Los gestores bibliográficos son herramientas que permiten almacenar, consultar y exportar artículos de investigación. Estos gestores permiten filtrar el contenido de su base de datos por los valores de los campos que tienen los artículos de investigación. Principalmente, los campos más importantes para el filtrado son las palabras clave, autores, fecha de publicación y editorial, entre otros.

A partir de esta premisa, diseñe el conjunto de clases e interfaces que considere para representar un gestor bibliográfico. El desarrollo realizado debe tener las siguientes funcionalidades:

Para cada artículo de investigación habrá que almacenar:
- Título
- Autor o autores del artículo.
- Email de cada uno de los autores.
- Palabras claves o keywords.
- Resumen o abstract del artículo.
- Fecha de publicación.
- Editorial en la que se publicó el artículo.
- Número de citas: cantidad de veces que el artículo ha sido referenciado en otros trabajos.
- Además, incluya un método que devuelva la referencia del artículo en formato APA para revista electrónica sin DOI.

El gestor bibliográfico deberá:
- Almacenar la información de múltiples artículos.
- Mostrar por la consola la información incluida en la base de datos en formato tabla (console.table).
- Permitir llevar a cabo búsquedas de trabajos por palabras claves y mostrar los resultados de la búsqueda en formato de tabla. Además, se deberá poder filtrar por los campos fecha de publicación, editorial y nombre de autor.
- Permitir la exportación de los resultados de una búsqueda en formato de cita APA.

#### **Desarrollo**:
Para este ejercicio he desarrollado dos clases.

La primera es `Article` que almacena los datos de un artículo. Estos son sus autores, sus emails, el título, palabras clave, número de citas... Todos los del enunciado. Además para cada atributo existe un método para acceder a el pues todos los atributos son privados. Además existe un método `formatAPA` que devuelve una referencia al artículo en formato APA sin DOT, tal como se especifica en el enunciado.

```typescript
export class Article {
  private title_: string;
  private authors_: string[];
  private emails_: string[];
  private keyWords_: string[];
  private abstract_: string;
  private publishDate_: string;
  private editorial_: string;
  private quotes_: number;

  constructor(newTitle: string, newAuthors: string[], newEmails: string[],
      newKeyWords: string[], newAbstract: string, newPublishDate: string,
      newEditorial: string, newQuotes: number) {
    this.title_ = newTitle;
    this.authors_ = newAuthors;
    this.emails_ = newEmails;
    this.keyWords_ = newKeyWords;
    this.abstract_ = newAbstract;
    this.publishDate_ = newPublishDate;
    this.editorial_ = newEditorial;
    this.quotes_ = newQuotes;
  }

  public get title(): string {
    return this.title_;
  }

  public get authors(): string[] {
    return this.authors_;
  }

  public get emails(): string[] {
    return this.emails_;
  }

  public get keyWords(): string[] {
    return this.keyWords_;
  }

  public get abstract(): string {
    return this.abstract_;
  }

  public get publishDate(): string {
    return this.publishDate_;
  }

  public get editorial(): string {
    return this.editorial_;
  }

  public get quotes(): number {
    return this.quotes_;
  }

  public formatAPA(): string {
    let format: string = "";
    for (let i = 0; i < this.authors.length - 1; i++) {
      format += this.authors[i] + ", ";
    }
    format += this.authors[this.authors.length - 1] + ". ";
    format += this.publishDate + ". ";
    format += this.title + ". ";
    format += this.editorial + ".";
    return format;
  }
}
```

La segunda clase es `BookManager` que almacena y gestiona varios artículos. En el constructor puede recibir un array de artículos y los almacenará y puede llamar a la función `insert`cuyo funcionamiento es el mismo. También posee una función `print` que imprimirá el contenido de los artículos en formato tabla. Al igual que in método `search` para buscar artículos y otros varios para filtrar por palabras claves, autores, editorial...

```typescript
export class BookManager {
  private articles_: Article[];

  constructor(newArticles: Article[] = []) {
    this.articles_ = newArticles;
  }

  public insert(newArticles: Article[]) {
    newArticles.forEach((article) => {
      this.articles_.push(article);
    });
  }

  public print() {
    this.articles_.forEach((article) => {
      console.log(`${article.formatAPA()}`);
      console.table(article);
      console.log('\n');
    });
  }

  public search(keyWords: string[]): Article[] {
    const result: Article[] = [];
    this.articles_.forEach((article) => {
      article.keyWords.forEach((word) => {
        keyWords.forEach((key) => {
          if (word === key) {
            result.push(article);
          }
        });
      });
    });
    return result;
  }

  public filterDate(dateFilter: string): Article[] {
    const result: Article[] = [];
    this.articles_.forEach((article) => {
      if (article.publishDate === dateFilter) {
        result.push(article);
      }
    });
    return result;
  }

  public filterAuthor(authorFilter: string): Article[] {
    const result: Article[] = [];
    this.articles_.forEach((article) => {
      article.authors.forEach((author) => {
        if (author === authorFilter) {
          result.push(article);
        }
      });
    });
    return result;
  }

  public filterEditorial(editorial: string): Article[] {
    const result: Article[] = [];
    this.articles_.forEach((article) => {
      if (article.editorial === editorial) {
        result.push(article);
      }
    });
    return result;
  }
}
```



### **Ejercicio 3 - Medios de transporte**

#### **Enunciado**:
En este ejercicio se solicita crear una serie de clases que permitan representar los diferentes vehículos y medios de transporte que se pueden usar para desplazarse por una ciudad. Entre ellos podemos encontrar los coches, motos, patinetes, trenes, guaguas, bicicletas e, incluso, podríamos considerar el ser un peatón, entre otros.

Cree una interfaz denominada Movable que incluya las propiedades y métodos necesarios que deberá implementar cualquier clase que represente a un objeto que pueda moverse. A continuación, escriba las clases necesarias para representar los medios de transporte mencionados con anterioridad.

Por último, cree una clase Street que reciba el nombre de una calle y su localización, además de distintos tipos de vehículos que podrían circular por la misma. La clase deberá incluir un método que muestre por la consola la cantidad de vehículos de cada tipo que hay en ella en cada momento. Asimismo, se deberá poder añadir o eliminar vehículos de la calle en cualquier momento y ordenar y mostrar los vehículos según la velocidad a la que circulan.


#### **Desarrollo**:
Para este ejercicio hemos desarrollado una interfaz `Movable` que defina todos los vehículos que son móviles.

```typescript
interface Movable {
  weight_: number;
  speed_: number;
  year_: number;
}
```

Luego hemos creado una clase abstracta `Vehicle` que sirva como clase padre para el resto de vehículos. Esta clase implementa la interfaz `Movable` y añade funciones para acceder a los atributos. Además de una función `Type` que devuelve el tipo del vehículo.

```typescript
abstract class Vehicle implements Movable {
  weight_: number;
  speed_: number;
  year_: number;

  constructor(weight: number, speed: number, year: number) {
    this.weight_ = weight;
    this.speed_ = speed;
    this.year_ = year;
  }

  public get weight(): number {
    return this.weight_;
  }

  public get speed(): number {
    return this.speed_;
  }

  public get year(): number {
    return this.year_;
  }

  public type(): string {
    return "Vehicle";
  }
}
```

Luego, para cada vehículo hemos creado una clase que hereda de la clase `Vehicle` y a todos les he añadido alguna característica especial. Por ejemplo a los coches les he añadido la marca, a las bicis el número de marchas, a las guaguas el número de pasajeros... Y todos modifican la función `Type` para que devuelva su tipo exacto.

```typescript
export class Car extends Vehicle {
  brand_: string;

  constructor(weight: number, speed: number, year: number, brand: string) {
    super(weight, speed, year);
    this.brand_ = brand;
  }

  public get brand(): string {
    return this.brand_;
  }

  public type(): string {
    return "Car";
  }
}
```

```typescript
export class Motorbike extends Vehicle {
  sidecar_: boolean;

  constructor(weight: number, speed: number, year: number, sidecar: boolean) {
    super(weight, speed, year);
    this.sidecar_ = sidecar;
  }

  public get sidecar(): boolean {
    return this.sidecar_;
  }

  public type(): string {
    return "Motorbike";
  }
}
```

```typescript
export class Scooter extends Vehicle {
  constructor(weight: number, speed: number, year: number) {
    super(weight, speed, year);
  }

  public type(): string {
    return "Scooter";
  }
}
```

```typescript
export class Train extends Vehicle {
  destination_: string;

  constructor(weight: number, speed: number, year: number, dest: string) {
    super(weight, speed, year);
    this.destination_ = dest;
  }

  public get destination(): string {
    return this.destination_;
  }

  public type(): string {
    return "Train";
  }
}
```

```typescript
export class Bus extends Vehicle {
  passengers_: number;

  constructor(weight: number, speed: number, year: number, pass: number) {
    super(weight, speed, year);
    this.passengers_ = pass;
  }

  public get passengers(): number {
    return this.passengers_;
  }

  public type(): string {
    return "Bus";
  }
}
```

```typescript
export class Bicycle extends Vehicle {
  gears_: number;

  constructor(weight: number, speed: number, year: number, gears: number) {
    super(weight, speed, year);
    this.gears_ = gears;
  }

  public get gears(): number {
    return this.gears_;
  }

  public type(): string {
    return "Bicycle";
  }
}
```

Por último hemos creado la clase `Street` que implementa una calle y almacena todos los vehículos en ella. Además añade dos métodos para añadir y quitar vehículos. Otro para mostrar la cantidad de cada vehículo que circula por la calle y otro que ordena los vehículos y los muestra por orden de velocidad.

```typescript
export class Street {
  private vehicles_: Vehicle[];

  constructor(newVehicles: Vehicle[]) {
    this.vehicles_ = newVehicles;
  }

  addVehicle(newVehicle: Vehicle) {
    this.vehicles_.push(newVehicle);
  }

  removeVehicle(oldVehicle: Vehicle) {
    this.vehicles_.forEach((vehicle, index) => {
      if (vehicle === oldVehicle) {
        this.vehicles_.splice(index, 1);
      }
    });
  }

  showTypes() {
    let countCars: number = 0;
    let countMotorbikes: number = 0;
    let countScooters: number = 0;
    let countTrains: number = 0;
    let countBuses: number = 0;
    let countBicycles: number = 0;
    this.vehicles_.forEach((vehicle) => {
      switch (vehicle.type()) {
        case "Car": {
          countCars++;
        }
        case "Motorbike": {
          countMotorbikes++;
        }
        case "Scooter": {
          countScooters++;
        }
        case "Train": {
          countTrains++;
        }
        case "Bus": {
          countBuses++;
        }
        case "Bicycle": {
          countBicycles++;
        }
        default: {

        }
      }
    });
    console.log(`Cars: ${countCars}`);
    console.log(`Motorbikes: ${countMotorbikes}`);
    console.log(`Scooters: ${countScooters}`);
    console.log(`Trains: ${countTrains}`);
    console.log(`Buses: ${countBuses}`);
    console.log(`Bicycles: ${countBicycles}`);
  }

  speedOrder() {
    const unordered: Vehicle[] = this.vehicles_;
    const ordered: Vehicle[] = [];
    while (unordered.length > 0) {
      let vehicleIndex: number = 0;
      let maxSpeed: number = 0;
      unordered.forEach((vehicle, index) => {
        if (vehicle.speed > maxSpeed) {
          maxSpeed = vehicle.speed;
          vehicleIndex = index;
        }
      });
      ordered.push(unordered[vehicleIndex]);
      unordered.splice(vehicleIndex, 1);
    }
    console.table(ordered);
  }
}
```



## **CONCLUSIÓN**
Las clases en typescript son una herramienta muy potente que permite definir muchos tipos y trabajar con ellos de manera sencilla. Además las clases genéricas nos ayudan a ahorrar mucho código haciendo que no tengamos que repetir la misma función una y otra vez si no tan solo en la clase padre. Por último las interfaces son bastante buenas a la hora de prevenir herrores pues te aseguras de que un objeto de un tipo siempre vaya a tener los atributos y métodos mínimos necesarios.
