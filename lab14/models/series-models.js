const series = [
    {nombre: "Euphoria"}, 
    {nombre: "Game Of Thrones"}, 
    {nombre: "Call Me By Your Name"}];

module.exports = class classSeries {
    constructor(nom) {
        this.nombre = nom;
    }

    save() {
        console.log(this);
        series.push(this);
        console.log(series);
    }

    static fetchAll() {
        return series;
    }
}