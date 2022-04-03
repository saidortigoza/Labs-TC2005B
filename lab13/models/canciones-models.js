const canciones = [
    {nombre: "Ribs by Lorde"}, 
    {nombre: "Team by Lorde"}, 
    {nombre: "Meet Me Halfway by Black Eyed Peas"}];

module.exports = class classCanciones {

    constructor(nom) {
        this.nombre = nom;
    }

    save() {
        console.log(this);
        canciones.push(this);
        console.log(canciones);
    }

    static fetchAll() {
        return canciones;
    }
}