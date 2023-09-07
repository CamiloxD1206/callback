// const boton = document.querySelector('#boton');
//1.-eventeListener-----------------------------------------
// function color() {
//     boton.classList.add('boton-nuevo')
// };
// boton.addEventListener('click', color);
//2.-funcionanonima--------------------------------------------
// boton.addEventListener('click', function() {
//     boton.classList.add('boton-nuevo')
// });
//(aplica igual para una ()=>{})
//---------segundaParte----------------------------------
// function primerAccion(z, mensaje) {
//     document.write(mensaje)
//     setTimeout(z, 2000)

// }

// function segundaAccion(mensaje) { document.write('Tacue Salazar', mensaje) }


// setTimeout(() => primerAccion(() => segundaAccion('esta aprendiendo callbacks'), 'Camilo Estevan '), 5000)
//----------------------------------------------------------------------------------------------------------
function nombres(z, g) {
    console.log(g)
    setTimeout(z, 2000)
}

function apellidos(s, r) {
    console.log(r)
    setTimeout(s, 2000)

}

function informacion(v) {
    console.log(v)

}


setTimeout(() => nombres(() => apellidos(() => informacion('tengo 20 años,estudio desarrollo de software y mido 1.62cm'), 'Tacue Salazar'), 'Camilo Estevan'), 2000)