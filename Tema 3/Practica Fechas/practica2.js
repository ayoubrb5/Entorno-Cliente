function diasHasta(fecha) {
  const diferencia = fecha - new Date();
  const dias = diferencia / 86400000;
  return Math.ceil(dias);
}

// Prueba con un cumpleaños de ejemplo
const miCumpleanos = new Date('2027-05-15');
console.log('Faltan ' + diasHasta(miCumpleanos) + ' días para mi cumpleaños.');
