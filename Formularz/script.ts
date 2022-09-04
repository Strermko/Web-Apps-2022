class InputsApp { // Tworzenie klasy
  inputValues: Array<number> = []; // Tworzenie Tablicy
  countNumber: number = 1; // Przypisywanie 
  constructor() { // Construktor Kod wykonujący sie 1 raz podczas  tworzenia obiektu 
    const countInput: HTMLElement = document.getElementById("inputs-count"); // Pobieranie wartości z pola HTML "inputs-count"
    countInput.addEventListener("input", (event: Event) => { // Dodanie do Listy Eventów Eventa (To ten kod w Klarmach)
      const target = event.target as HTMLInputElement;   // ???
      this.countNumber = Number(target.value);  // ???
      new UI(this.countNumber, this.inputValues); // Tworzenie obiektu UI wraz w wrzuceniem do neigo 2 wartości
    });
    new UI(this.countNumber, this.inputValues); // Tworzenie obiektu UI wraz w wrzuceniem do neigo 2 wartości
  }
}

class Stats {  // Tworzenie klasy
  sum(values: Array<number>): number { // Tworzenie funkcji sum która przyjmuje tabice numerów
    const sum: number = values.reduce((a, b) => a + b, 0);  // Funkcja Sumująca
    return sum; // Zwracanie sumy
  }
  average(values: Array<number>): number {  // Tworzenie funkcji average która przyjmuje tabice numerów
    const sum: number = values.reduce((a, b) => a + b, 0); // Funkcja sumująca
    return Number((sum / values.length).toFixed(2)); // Zwracanie sumy podzielonej porzez ilość elementów tablicy
  }
  min(values: Array<number>): number { // Tworzenie funkcji min która przyjmuje tabice numerów
    return Math.min(...values); // Zwracanie liczby minimalnej , znajdującej się w tablicy values
  }
  max(values: Array<number>): number {  // Tworzenie funkcji max która przyjmuje tabice numerów
    return Math.max(...values);  // Zwracanie liczby maksymalnej , znajdującej się w tablicy values
  }
}

class NumberInput { // Tworzenie klasy NumberInput
  input: HTMLInputElement; // Tworzenie zmiennej input
  button: HTMLButtonElement; // Tworzenie zmienej button
  constructor(id, count, values: Array<number>) {   //  Twrzoenie Construktor Kod wykonujący sie 1 raz podczas  tworzenia obiektu 
    // input -0-----------------------------------------------------------
    this.input = document.createElement("input"); // Tworzenie Input w Html i przypisywanie do zmienej input 
    this.input.type = "number";  // Przypisywanie Typu wartości z inputu do wartości number
    this.input.value = values[id] ? String(values[id]) : "0"; // Przypisywanie do zmienej input Wyniku ifa po sprawdzeniu warunku (values[id] jest poruwnywany do 0)
    this.input.id = `input-${id}`; //
    values[id] = Number(this.input.value); // Przypisywanie do konkretnej komurki tablicy ( values[id]) Wartoci Number(this.input.value) Z imputa powyzej
    this.input.addEventListener("input", (event: Event) => { // Dodanie do listy eventw Eventu ktry sie wykona podczas inputa
      const target = event.target as HTMLInputElement; // Przypiswyanie do zmienej target sparsowanej wartoci na HTMLInputElement
      values[id] = Number(target.value);  // Przypisywanie do konkretej komurki tablicy wartości target.value oraz parsowanie Number(target.value) stringa na liczbe
      new UI(count, values); // Tworzenie obiektu UI wrzucanie do obiektu dwóch zminnych count i values
    });
    // delete button -0-----------------------------------------------------------
    this.button = document.createElement("button"); // Tworzenie przycisku
    this.button.innerText = "X"; // Dodawanie tekstu " X " do przycisku
    this.button.addEventListener("click", (event: Event) => { //  Tworzenie ewentu wywołanego podczas kliknięcia 
      const countInput: HTMLInputElement = document.getElementById( "inputs-count" ) as HTMLInputElement; //  Przypisanie do zmiennej countInput elementu "inputs-count"
      console.log(values); // Wyświetl wartości w konsoli 
      values[id] = 0; // przypisywanie 0 do elementu o indexie [id] w tablicy Values
      values.splice(id, 1); //??
      count -= 1; // odjęcie od count - 1
      countInput.value = count; 
      console.log({ count });

      new UI(count, values);
    });
  }

  render(): HTMLDivElement {
    const container = document.createElement("div"); 
    container.className = "input-container"; // Przypisanie divowi container id (#input-container)
    container.appendChild(this.input); // doddanie inputa do diva container // Czym się różni od tego this.button = document.createElement("button"); ????
    container.appendChild(this.button); // doddanie buttona do diva container

    return container; // zwróć pojemnik
  }
}

class UI {
  statsSection = document.getElementById("UI-section");
  constructor(inputCount: number, values: Array<number>) {
    this.statsSection.innerHTML = null;
    if (this.validateNumbers(inputCount, values)) {
      this.generateUI(inputCount, values);
    } else {
      const inputsSection = document.getElementById("inputs");
      inputsSection.innerHTML = null;
      this.generateInvalidUI();
    }
  }

  validateNumbers(inputCount: number, values: Array<number>): boolean {
    let isValid = false;
    console.log(inputCount);
    if (values && inputCount > 0) {
      isValid = values.every((val) => typeof val === "number");
    }

    return isValid;
  }

  generateStat(
    name: string,
    calcMethod: Function,
    values: Array<number>
  ): HTMLDivElement {
    const statName = document.createElement("p");
    const value = document.createElement("b");
    statName.innerText = name;
    value.innerText = calcMethod(values);

    const container = document.createElement("div");
    container.appendChild(statName);
    container.appendChild(value);

    return container;
  }
  generateNumberInputs(count: number, values: Array<number>): void {
    const inputsSection = document.getElementById("inputs");
    inputsSection.innerHTML = null;
    for (let i = 0; i < count; i++) {
      const input = new NumberInput(i, count, values).render();
      inputsSection.appendChild(input);
    }
  }
  generateUI(inputCount: number, values: Array<number>): void {
    const stats = new Stats();
    const sections: Array<HTMLDivElement> = [];
    this.generateNumberInputs(inputCount, values);
    const valuesToCount = values.slice(0, inputCount);
    sections.push(this.generateStat("Sum", stats.sum, valuesToCount));
    sections.push(this.generateStat("Average", stats.average, valuesToCount));
    sections.push(this.generateStat("Min", stats.min, valuesToCount));
    sections.push(this.generateStat("Max", stats.max, valuesToCount));

    sections.forEach((el: HTMLDivElement) => {
      this.statsSection.appendChild(el);
    });
  }

  generateInvalidUI(): void {
    const invalidMsg = document.createElement("b");
    invalidMsg.innerText = "Masz gdzieś puste wartości!";
    this.statsSection.appendChild(invalidMsg);
  }
}

const inputsApp = new InputsApp();
