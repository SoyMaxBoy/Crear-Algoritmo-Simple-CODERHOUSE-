const clave = prompt("Crea tu nueva contraseña");

alert("Contraseña Creada con exito");

let aprobacion = confirm("Estas listo para probar tu contraseña");

if (aprobacion == true) {
  let Ingclave = prompt("Ingresa tu contraseña");

  while (clave != Ingclave) {
    alert("Contraseña Incorrecta");

    console.log(clave);

    console.log(Ingclave);

    Ingclave = prompt("Coloca tu contraseña correcta: ");
  }

  alert("Contraseña Correcta");
} else {
  alert("Refresca cuando estes preparado");
}
