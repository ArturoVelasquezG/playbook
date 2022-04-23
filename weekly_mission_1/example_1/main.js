//Ejercicio 1: uso de objetos

// Number 1: Creacion de objeto con propiedades
let myCar = new Object(); //creacion de objeto
//Al ser un carro se daran ciertos atributos
myCar.make ='Ford'; 
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) //imprimiendo objeto

//Number 2. Declaracion de un objeto con variables locales y publicas

const myModule = (()=>{
    //variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar =[1,2,3,4]
    const baz ="Soy un valor que va a ser expuesto"

    //variables para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
            publicBaz: baz   
    }
    return exporte
})()
console.log(myModule)