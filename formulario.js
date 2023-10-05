let registro = [];
function guardar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = document.getElementById("fecha").value;
    let correo = document.getElementById("correo").value;
    let identificacion = document.getElementById("identificacion").value;
    let numero = document.getElementById("numero").value;
    let masculino = document.getElementById("masculino").checked;
    let femenino = document.getElementById("femenino").checked;
    let otro = document.getElementById("otro").checked;
    let genero = 0;
    if (masculino) {
        genero = " masculino";
    } else if (femenino) {
        genero = "femenino";
    } else if (otro) {
        genero = "otro";
    }
    let user = {
        nombre: nombre,
        apellido: apellido,
        identificacion: identificacion,
        fecha: fecha,
        correo: correo,

        genero: genero,
        numero: numero,
    };

    registro.push(user);
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("identificacion").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("femenino").checked = false;
    document.getElementById("otro").checked = false;


}
console.log(registro);

function validar() {
    if (document.getElementById("nombre").value == "" ){
        document.getElementById("alert").textcontent = "El nombre no debe estar vacio."
        setTimeout(() => {
            
        }, document.getElementById("alert").textcontent = "");
    }
}