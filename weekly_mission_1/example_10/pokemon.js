export default class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log(`Pokemon: ${this.name}`)
    }
    
    sayMessage(message){
        console.log(`${this.name} dice: ${message}`);
    }
}
