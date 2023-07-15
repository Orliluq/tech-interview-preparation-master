function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:

  // Convertir la hora en formato de cadena a horas y minutos separados
  const [hours, minutes] = time.split(':').map(Number);

  // Calcular la nueva cantidad total de minutos
  const totalMinutes = hours * 60 + minutes + minutesToAdd;

  // Obtener las nuevas horas y minutos
  const newHours = Math.floor(totalMinutes / 60) % 12 || 12;
  const newMinutes = totalMinutes % 60;
  return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;

// otra forma:
  // const [hours, minutes] = time.split(':').map(Number);

  // const totalMinutes = hours * 60 + minutes + minutesToAdd;
  // let newHours = Math.floor(totalMinutes / 60) % 12;
  // let newMinutes = totalMinutes % 60;

  // // Ajustar el formato de las horas y minutos
  // if (newHours === 0) {
  //   newHours = 12;
  // }

  // // Formatear las horas y minutos como cadenas de dos dígitos
  // const formattedHours = String(newHours).padStart(2, '0');
  // const formattedMinutes = String(newMinutes).padStart(2, '0');

  // // Devolver la nueva hora en formato HH:MM
  // return `${formattedHours}:${formattedMinutes}`;
}

module.exports = clockMinuteAdder;


