console.log("hola");

let nombreVariable = "Hola JS";
console.log(nombreVariable);

let nombreVariable2 = "35";
console.log(nombreVariable2);

let numero=5;
console.log(nombreVariable2+numero);


let numero2;

console.log(numero2);
/* para declarar objeto*/

let objeto = {
    nombre:"Fernando",
    apellido:"Gerez",
    edad: 14,
    carrera:"Tec. en desarrollo web"
}
console.log({objeto});

console.log(objeto.edad);

objeto.apellido = "Perez";

console.log(objeto.apellido);

/* constante no se sobre escribe, solo se usan*/
const PI = 3.14;
const SALUDO="Bienvenido";
console.log(PI*objeto.edad);

console.log(SALUDO + " "+objeto.nombre + " "+objeto.apellido);
/* pide al usuario que ingrese por pantalla */
/* parseInt convierte en INT el dato que me ingrese*/

//let dato = parseInt(prompt("Ingrese su edad")); pide por consola

console.log(dato);

/*ALGUNOS MÉTODOS*/

let dato2 = "Ingrese su edad?";

console.log(dato2.length);

console.log(dato2.toLocaleUpperCase);

console.log(dato2.repeat(2));

console.log(dato2.replace(numero, numero2));

//alert("a dónde vas papu?"); cartel molesto


let sephiroth = {
  id: 1,
  name: "Sephiroth",
  lastName: "Crescent",
  game: "Final Fantasy VII",
  loveInterest: "Aerith Gainsborough",
  family: {
      mothers: ["Lucrezia Crescent", "Jenova"],
      father: "Professor Hojo"
  },
  job: "Soldier First Class Shinra",
  alias: "One Winged Angel",
  goals: [
      "Destroy the planet with meteor",
      "Get Black Matheria to North Crater",
      "Manipulate Cloud Strife's Brain"
  ],
  weapon: "Masamune long samurai sword",
    typeVillain: "Ultimate Warrior"
};




/* Hacer algún programita para practicar JavaScript
ejemplo del fantasma
si return (edad>18) ? : "Sos mayor" : "No sos mayot";
*/ 


/* entrada y salida con variables 3 de ellas:

 var (variable global, se usa para todo, quedaron en desuso)
 cuidar tipo de dato, ejemplo queres sumar string y number CONCATENA, no suma.
 '+' OPERADOR MATEMÁTICO Y CONCATENADOR-

  declaración del tipo de variable, nombre de variable, signo igual, dato;

  llamar a la variable.
console.log(nombreVariable); 

 let (variable más usada que var, que trabaja en scope sirve solo para donde está alojada local de la estructura)
 
 
 const (CONSTANTE no se puede modificar su valor)*/