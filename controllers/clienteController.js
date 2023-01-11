const Usuario = require("../models/Cliente");


exports.crearUusario = async (req, res) => {
    console.log("Ingreso al post");
    try {
        let usuario;
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsuarios = async (req, res) => {

    try {

        const usuario = await Usuario.find();
        res.json(usuario)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarUsuario = async (req, res) => {

    try {
        const { nombre, cedula, correo, telefono, tipo_tramite, tipo_licencia, comprobante } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        //nombre, cedula, correo, teléfono, tipo_tramite, tipo_licencia, comprobante

        usuario.nombre = nombre;
        usuario.cedual = cedula;
        usuario.correo = correo;
        usuario.telefono = telefono;
        usuario.tipo_tramite = tipo_tramite;
        usuario.tipo_licencia = tipo_licencia;
        usuario.comprobante = comprobante;

        usuario = await Usuario.findOneAndUpdate({ _id: req.params.id },usuario, { new: true} )
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        res.json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario) {
            res.status(404).json({ msg: 'No existe el producto' })
        }
       
        await Usuario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Producto eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}