document.cookie = `idioma=es; max-age=604800; path=/`;

document.cookie = "idioma=; max-age=0; path=/";


function leerCookie(nombre) {
  const cookiesTexto = document.cookie;
  const cookiesLista = cookiesTexto.split("; ");

  for (const cookie of cookiesLista) {
    const partes = cookie.split("=");

    if (partes[0] === nombre) {
      return partes[1];
    }
  }

  return null;
}

function borrarCookie(nombre) {
  document.cookie = nombre + "=; max-age=0; path=/";
}

console.log("Antes de borrar:", leerCookie("idioma"));

borrarCookie("idioma");

console.log("Después de borrar:", leerCookie("idioma"));

