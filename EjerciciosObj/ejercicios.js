//1.
let persona = {
    name : "kiko",
    age : 35,
    city : "Badajoz"
};
console.log(persona);

//2.
let coche = {
    marca : "Toyota",
    modelo : "Corolla",
    anio : 2020
};
console.log(coche.marca);
coche.anio=2024;
coche.color="rojo";
console.log(coche);

//3.
let animal = {
    tipo:"anfibio",
    nombre:"rana",
    edad:2
};
console.log(animal);
delete (animal.edad);
console.log(animal);

//4.
let empresa = {
    direccion : direccion = {
        calle : "luis 14",
        numero : 2,
        ciudad : "Badajoz"
    }
};
console.log(empresa);
console.log(empresa.direccion.calle);

//5.
let datos = {
    nombre : "Ana",
    edad : 25,
    activo : true,
    salario : 1200
};
console.log(datos);
function filtrarPorTipo(datos,a){
    let arrays = {};
    for (let valor in datos){
        if(typeof(valor)===a){
            arrays = valor;
        }
    }
    return arrays;
};
console.log(filtrarPorTipo(datos,"number"));