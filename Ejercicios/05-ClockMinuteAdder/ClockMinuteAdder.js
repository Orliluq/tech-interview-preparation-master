<<<<<<< HEAD
function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:

  const [horas, minutos] = time.split(":"); // ["horas","minutos"]

  const minutosTotales = minutesToAdd + Number(minutos);
  console.log(minutosTotales);
  const horasTotales = Math.floor(minutosTotales / 60) + parseInt(horas); // 120
  console.log(horasTotales); // 2 + 6

  const nuevosMinutos = minutosTotales % 60; // 5
  console.log(nuevosMinutos);

  const nuevasHoras = ((horasTotales - 1) % 12) + 1; // evito las 00
  console.log(nuevasHoras);

  // 03:05

  const formatoHoras = nuevasHoras > 9 ? nuevasHoras : `0${nuevasHoras}`;
  const formatoMinutos =
    nuevosMinutos > 9 ? nuevosMinutos : `0${nuevosMinutos}`;

  return formatoHoras + ":" + formatoMinutos;
}

// console.log(clockMinuteAdder("09:00", 20)); //('09:20')
// console.log(clockMinuteAdder("01:30", 30)); //('02:00')
// console.log(clockMinuteAdder("12:05", 100)); //('01:45')
console.log(clockMinuteAdder("06:30", 95)); //('08:00')
// console.log(clockMinuteAdder("12:05", 1440)); //('12:05')

module.exports = clockMinuteAdder;



// function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:

  // Convertir la hora en formato de cadena a horas y minutos separados
  // const [hours, minutes] = time.split(':').map(Number);

  // Calcular la nueva cantidad total de minutos
  // const totalMinutes = hours * 60 + minutes + minutesToAdd;

  // Obtener las nuevas horas y minutos
  // const newHours = Math.floor(totalMinutes / 60) % 12 || 12;
  // const newMinutes = totalMinutes % 60;
  // return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
=======
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
>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c

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
<<<<<<< HEAD
// }

// module.exports = clockMinuteAdder;
=======
}

module.exports = clockMinuteAdder;
>>>>>>> e2f94fba9f42d1b15e8f4dda53d76383a0c9797c


