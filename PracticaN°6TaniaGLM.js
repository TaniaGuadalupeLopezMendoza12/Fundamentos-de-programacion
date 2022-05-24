console.log("si se ve");
/*9.-programa una función que obtenga un número aleatorio entre 501 y 600*/
const aleatorio = () => console.info(Math.round((Math.random()*100)+500));
aleatorio();
/*10.- programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido y otro), pe.mifuncion(2002) devolverá true.*/
const capicua = (numero = 0) => {
    if (!numero) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);

    numero= numero.toString();
    let alReves = numero.split("").reverse().join("");

    return (numero === alReves)
    ? console.info(`Sí es capicúa, Numero original ${numero}, Número alrevés ${alReves}`)
    : console.info(`No es capicúa, Numero original ${numero}, Número alrevés ${alReves}`)
}
capicua();
capicua("19");
capicua(200);
capicua(2002);
capicua(212.212);
/*11.-programa una función que calcule el factorial de un número (el factorial de un entero positivo n,
se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.mifuncion(5) devolverá 120.*/
const factorial = (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);

    if(numero === 0) return console.error("El numero no puede ser 0");

    if(Math.sign(numero)=== -1) return console.error("El numero no puede ser negativo");

    let factorial = 1;
    for(let i= numero; i > 1;i--){
        factorial = factorial * i;
    }
    return console.info(`El factorial de ${numero} es ${factorial}`);

}
factorial(0);
factorial(-5);
factorial();
factorial(5);
/*12.-Programa una función que determine si un número es primo ( aquel número que solo es divisible
 por sí mismo y uno)o no, pe.mifuncion(7) devolverá true.*/
 const numeroPrimo = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);
       
    if(numero === 0) return console.error("El numero no puede ser 0");

    if(numero === 1) return console.error("El numero no puede ser 1");

    if(Math.sign(numero)=== -1) return console.error("El numero no puede ser negativo");

    let divisible = false;

    for(let i=2; i< numero;i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        }
    }
return(divisible)
? console.log(`El número ${numero}, No es primo`)
: console.log(`El número ${numero}, Si es primo`)
}
numeroPrimo(); 
numeroPrimo("320"); 
numeroPrimo(0);
numeroPrimo(1);  
numeroPrimo(-320); 
numeroPrimo(13); 
/*13.- programa una función que determine si un número es par o impar, pe.mifuncion(29) devolverá impar*/
const numeroParImpar= (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste un número");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`);

    return((numero % 2) === 0)
    ? console.info(`El número ${numero} es par`)
    : console.info(`El número ${numero}, es impar`)
}
numeroParImpar();
numeroParImpar(20);
numeroParImpar(19);
numeroParImpar("20");
console.log("14");
/*14.- programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe.mifuncion (0,"C") devolverá 32°F*/
const convertirGrados= (grados = undefined, unidad = undefined) =>{
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor "${grados}" ingresado, No es un numero`); 

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if(typeof unidad !== "string") return console.error(`El valor "${unidad}" ingresado, No es una cadena de texto`);
    
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de la unidad no reconocido");

    if(unidad === "C"){
    return console.info(`${grados}°C = ${Math.round((grados * (9/5))+32)}°F`);
   } else if (unidad ==="F"){
    return console.info(`${grados}°F = ${Math.round(((grados - 32) * (5/9)))}°C`); 
   } else {
    return console.error("El tipo de grados a convertir No es valido");
   }
}
convertirGrados(32);
convertirGrados(32,true);
convertirGrados(32,"E");
convertirGrados(100,"C");
convertirGrados(32,"F");
convertirGrados(100,"F");
console.log("15");
/*15.- programa una función para convertir números de base binaria a decimal y viceversa
pe.mifuncion(100,2) devolver a 4 base 10*/
const convertirBinarioDecimal = (numero = undefined, base= undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste el numero convertir");

    if(typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, No es un numero`); 

    if(base === undefined) return console.warn("No ingresaste la base a convertir");

    if(typeof base !== "number") return console.error(`El valor "${base}" ingresado, No es un numero`);
if (base === 2){
    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
} else if(base === 10){
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
}else {
  return console.error("El tipo de base a convertir No es valido");
}
}
convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100,"2");
convertirBinarioDecimal(100,2);
convertirBinarioDecimal(101,2);
convertirBinarioDecimal(4,10);
convertirBinarioDecimal(114,3);
console.log("Termina");
/*16.-Programa una función que devuelva el monto final después de 
aplicar un descuento a una cantidad dada,pe.mifuncion(1000,20) devolverá 800.*/
const Descuento = (monto = undefined, descuento = 0) =>{
    if(monto === undefined) return console.warn("No ingresaste el monto");

    if(typeof monto !== "number") return console.error(`El valor "${monto}" ingresado, No es un numero`); 

    if(monto === 0) return console.error("El monto no puede ser 0"); 

    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo");

    if(typeof descuento !== "number") return console.error(`El valor "${descuento}" ingresado, No es un numero`); 

    if(Math.sign(descuento) === -1) return console.error("El descuento no puede ser negativo");
return console.info(`$${monto} - ${descuento}% = $${monto -((monto * descuento)/100)}`)
}
Descuento(1000,25);
/*17.-programa una función que dada una fecha válida determine cuántos años han pasado hasta el día de hoy, 
pe.mifuncion( new Date(1948,4,23)) devolver a 35 años (en 2020)*/
const Calcularanios = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn("No ingresaste la fecha");

    if(!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");
let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
aniosEnMS = 1000 * 60 *60 * 24 * 365 
aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);

return (Math.sign(aniosHumanos)=== -1)
? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
:(Math.sign(aniosHumanos) === 1)
?  console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
: console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}
Calcularanios(new Date(2002,11,11));
Calcularanios(new Date());