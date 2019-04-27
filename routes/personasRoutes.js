const mongoose = require('mongoose');
const personasMiddlewares = require('../lib/personasMiddlewares');
const Persona = mongoose.model('personas');

module.exports = (app) => {
    app.get('/api/personas', async (req,res) =>{
        try{
            const respuesta = await Persona.find();
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message)
        }
    });

    app.get('/api/personas/:id', async (req,res) =>{
        try{
            const respuesta = await Persona.find({
                _id: req.params.id,
            });
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message)
        }
    });

    app.get('/api/personas/nombre/:nombre', async (req,res) =>{
        try{
            const respuesta = await Persona.find({
                nombre: req.params.nombre,
            });
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message)
        }
    });

    app.post(
        '/api/personas', 
        personasMiddlewares.datosLlenos,
        personasMiddlewares.tipoDato,
        async (req,res) => {
            try{
                const nuevaPersona = new Persona(req.body);
                const respuesta = await nuevaPersona.save();
                res.send(respuesta);
            }
            catch(error){
                res.send(error.message)
            }
            res.send('Si pasa');
    });

    app.put(
        '/api/personas/:id', 
        personasMiddlewares.datosLlenos,
        personasMiddlewares.tipoDato,
        async (req,res) => {
        try{
            const respuesta = await Persona.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                { new: true}
            ).exec();
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message)
        }
    });

    app.delete('/api/personas/:id', async (req,res) => {
        try{
            const respuesta = await Persona.findOneAndDelete({
                _id: req.params.id
            });
            res.send(respuesta);
        }
        catch(error){
            res.send(error.message)
        }
    });
    
};
