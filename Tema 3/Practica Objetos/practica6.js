class Producto {
    constructor(nombre, precio ,stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    conIVA() {
    return precio * 1.21
    }

    vender(n){
        if (this.stock >= n){
            this.stock = this.stock - n
            return true
        }else {
            return false
        }
    }
}

