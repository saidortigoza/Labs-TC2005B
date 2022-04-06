const usuarios = [];

module.exports = class User {
    constructor(nuevo_usuario, nuevo_password, nuevo_nombre) {
        this.usuario = nuevo_usuario;
        this.password = nuevo_password;
        this.nombre = nuevo_nombre;
    }

    save() {
        usuarios.push(this);
        console.log(usuarios);
    }

    static login(usuario, password) {
        return true;
    }
}