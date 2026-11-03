const libro = {
    titulo: "Pajarito blax",
    autor: "Adrian blax",
    paginas: 69,

    resumen: function () {
        return this.titulo + ", de " + this.autor + " (" + this.paginas + " páginas)";
    }
};

console.log(libro.resumen());