// Giant Robot class

// Goal creat an interface with a methods 

// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>

class Robot {
    name: string
    power: number
    type: string

    constructor(name: string, power: number, type: string) {
        this.name = name
        this.power = power
        this.type = type
    }

    describe() {
        return `name: ${this.name} type: ${this.type} power: ${this.power}`
    }
}


