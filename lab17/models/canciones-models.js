const db = require('../util/database');

module.exports = class Canciones {
    constructor(nom) {
        this.nombre = nom;
    }

    save() {
        return db.execute('INSERT INTO canciones (nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM canciones');
    }

    static searchId(id_search) {
        return db.execute('SELECT nombre FROM canciones WHERE id_cancion = ?', [id_search]);
    }
}