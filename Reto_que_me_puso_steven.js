let trabajadores = [{
    nombre :"Joseph Steven Orozco Lugo", salario : 2850000,  codigo : 29818,
},
{
    nombre :"Juan José Farias Lugo", salario : 4400000, codigo : 27232,
},
{
    nombre : "Gloria Patricia Lugo Valencia", salario : 9500000, codigo : 11095,
}];

trabajadores.forEach(trabajador => {
    console.log(trabajador.nombre);
    console.log(trabajador.salario);
   
    trabajador.salario *=1.1;

console.log(trabajador.salario);
});