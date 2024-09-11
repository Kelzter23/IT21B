
class Flower {
    
    constructor(name, color, bloomSeason, isFragrant) {
        this.name = name;
        this.color = color;
        this.bloomSeason = bloomSeason;
        this.isFragrant = isFragrant;
    
    }displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Color: ${this.color}`);
        console.log(`Bloom Season: ${this.bloomSeason}`);
        console.log(`Is Fragrant: ${this.isFragrant ? 'Yes' : 'No'}`);
    }
}

const rose = new Flower('Rose', 'Red', 'Spring', true);
rose.displayDetails();