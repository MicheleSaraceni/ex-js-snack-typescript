//--------------------------------------------------------------Snack 1

// dato ricevuto da un API
let dato: unknown;

// dato = "Ciao";       <--- OK
// dato = 3;            <--- OK
// dato = true;         <--- OK
// dato = false;        <--- OK
// dato = [1, "ciao"]   <--- OK

if (typeof dato === "string") {
  console.log(dato.toUpperCase())
} else if (typeof dato === "number") {
  console.log(dato * 2)
} else if (typeof dato === "boolean") {
  dato === true ? console.log("si") : console.log("no")
} else {
  console.log("Tipo non supportato")
}



//--------------------------------------------------------------Snack 2

type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: number,
  sesso: "m" | "f",
  anniDiServizio: number[]
}

const dipendente1: Dipendente = {
  nome: "Michele",
  cognome: "Saraceni",
  annoNascita: 1994,
  sesso: "m",
  anniDiServizio: [2020, 2021, 2022, 2023, 2024, 2025]
}

console.log(dipendente1);

//--------------------------------------------------------------Snack 3

type Developer = Dipendente & {
  livelloEsperienza: "Junior" | "Mid" | "Senior",
  linguaggi?: string[];
  certificazioni: string[];
}

type ProjectManager = Dipendente & {
  teamSize: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}


