//Le decimos que use gulp
const {series,parallel,src,dest} = require("gulp");

//Tarea llamada inicio() que muestre por pantalla el siguiente mensaje "Generando proyecto CV"
function inicio(cb){
    console.log("Generando proyecto CV");
    cb();
}

//Una tarea llamada final() que muestre por pantalla el siguiente mensaje "Proyecto CV generado"
function final(cb){
    console.log("Proyecto CV generado");
    cb();
}

function pipeline(){
    //return src("index.html").pipe(dest("dist/"));
    return src("css/style_oscuro.css").pipe(dest("dist/"));
}

//Publicar tareas hasta el exterior.
exports.inicio = inicio;
exports.final = final;
exports.default = final;

exports.pipeline = pipeline;