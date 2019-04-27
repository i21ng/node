module.exports.datosLlenos = (req, res, next) => {
    const {nombre, edad, apellidos} = req.body;

    if(!nombre) return res.send('Falta el nombre');
    if(!edad) return res.send('Falta la edad');
    if(!apellidos) return res.send('Faltan apellidos');
    if(typeof(apellidos) != 'object') return res.send('Apellidos debe ser objeto');     
    if(!apellidos.paterno) return res.send('Falta el apellido paterno');
    if(!apellidos.materno) return res.send('Falta el apellido materno');

    next();
},
module.exports.tipoDato = (req, res, next) => {
    const {nombre, edad, apellidos, profesion} = req.body;
    let errores = []
        if(typeof(nombre) != 'string') {
            errores.push({
                mensaje: 'Nombre debe ser texto'
            });
        }
        if(typeof(edad) != 'number') {
            errores.push({
                mensaje: 'Edad debe ser un número'
            });     
        }
        if(typeof(apellidos.paterno) != 'string') {
            errores.push({
                mensaje: 'Apellido paterno debe ser texto'
            });
        }
        if(typeof(apellidos.paterno) != 'string') {
            errores.push({
                mensaje: 'Apellido materno debe ser texto'
            });
        }
        if(profesion && typeof(profesion) != 'string') {
            errores.push({
                mensaje: 'Profesión debe ser texto'
            });
        }
        if(errores.lenght){
            return res.send(errores);
        }
        next();    
}