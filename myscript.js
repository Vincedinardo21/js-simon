// Visualizzo 5 numeri casuali
let numeriRandom = createRandomArray();
let mioNumero = getMyNumber();
console.log(numeriRandom);
console.log(mioNumero);

for(let i = 0; i < 5; i++){
    let numeriIndovinati = numeriRandom.includes(mioNumero[i])
    if(numeriIndovinati){
        console.log("Ci sono numeri uguali: " + mioNumero[i]);
    }
}


// Le mie funzioni
// Funzione che mi restituisce un array con componenti randomiche
function createRandomArray(){
    let myArr = [];
    for(let i = 0; i < 5; i++){
        let randomNumber = Math.floor(Math.random() * 5 + 1);
        myArr.push(randomNumber);
    }
    return myArr;
}

// Array con componenti inserite da me
function getMyNumber(){
    let myArr = [];
    for(let i = 0; i < 5; i++){
        let randomNumber = parseInt(prompt("Inserisci un numero: "));
        myArr.push(randomNumber);
    }
    return myArr;
}

