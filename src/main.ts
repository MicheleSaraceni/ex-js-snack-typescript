//------------------------------------Snack 1

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