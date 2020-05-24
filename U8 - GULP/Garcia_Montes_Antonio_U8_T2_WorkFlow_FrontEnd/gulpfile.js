const { src, parallel, dest } = require("gulp");
const sass = require("gulp-dart-scss");
const sassdoc = require("sassdoc");


//Crear una tarea gulp que genere el achivo .css partiendo del cv.scss general.
function generar_cv() {
  return src("./scss/cv.scss")
  .pipe(sass())
  .pipe(dest('./dist/css/'));
}

var doc_options = {
  dest : 'docs'
}

//Crear una tarea una tarea gulp que genere la documentación con Sassdoc.
function generar_docs() {
  return src("./scss/cv.scss")
  .pipe(sassdoc(doc_options));
}

//Crear una tarea gulp que copie las imágenes dentro de la carpeta /dist/img.
function generar_img() {
  return src("./img/call-sharp.svg")
  .pipe(dest('./dist/img/'));
}


exports.generar_cv = generar_cv;
exports.generar_docs = generar_docs;
exports.generar_img = generar_img;
exports.default = parallel(generar_cv, generar_docs, generar_img);