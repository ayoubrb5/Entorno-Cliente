
const boton = document.getElementById("btnAñadir");

boton.addEventListener("click", function () {
    // 1. Recoger los datos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    // 2. Comprobar los datos
    if (
        nombre === "" ||
        document.getElementById("nota1").value === "" ||
        document.getElementById("nota2").value === "" ||
        document.getElementById("nota3").value === "" ||
        [nota1, nota2, nota3].some(n => !Number.isFinite(n) || n < 0 || n > 10)
    ) {
        alert("Introduce un nombre y notas entre 0 y 10.");
        return;
    }

    // 3. Calcular la media
    const media = (nota1 + nota2 + nota3) / 3;

    // 4. Calcular la calificación
    let calificacion;

    if (media < 5) {
        calificacion = "Suspenso";
    } else if (media < 7) {
        calificacion = "Aprobado";
    } else if (media < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }

    // 5. Crear una nueva fila
    const fila = document.createElement("tr");

    const datos = [
        nombre,
        nota1,
        nota2,
        nota3,
        media.toFixed(2),
        calificacion
    ];

    // 6. Crear una celda por cada dato
    datos.forEach(function (dato) {
        const celda = document.createElement("td");
        celda.textContent = dato;
        fila.appendChild(celda);
    });

    // 7. Añadir la fila al final de la tabla
    document.getElementById("tablaAlumnos").appendChild(fila);
});
