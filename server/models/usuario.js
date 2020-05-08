var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');


let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};


let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


usuarioSchema.methods.toJSON = function() {

    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}


let usuario_tto = {

    ID_USUARIO: { // Varchart 20 Bytes
        type: String,
        required: [true, 'El id es necesario'],
        unique: true,

    },

    ID_DOCUMENTO: { //Tipo de documento Float 126
        type: Number,
        required: false,
    },
    ID_CIUDAD: { //  Float 126
        type: Number,
        required: false
    },
    APELLIDOS: { // varchar 80 bytes
        type: String,
        required: false
    },
    NOMBRES: { // Varchar2 300 Bytes
        type: String,
        required: false
    },
    DIRECCION: { // Varchar 100 Bytes
        type: String,
        required: false
    },
    CIUDAD_DIR: { // Float 126 
        type: Number,
        required: false
    },
    TELEFONO: { // Varchar 15 Bytes
        type: String,
        required: false
    },
    EMP_O_PART: { // Varchar 1 bytes
        type: String,
        required: false
    },
    SEXO: { // Varchar 1 byte
        type: String,
        required: false
    },
    FECHA_NACIMIENTO: { // Date
        type: Date,
        required: false
    },
    ID_PAIS: { // float 126
        type: Number,
        required: false
    },
    FMODIFICA_USUARIO: { // Date
        type: Date,
        required: false
    },
    FAX: { // varchar 12 bytes
        type: String,
        required: false
    },
    EMAIL: { // Varchar 50 byte
        type: String,
        required: false
    },
    CELULAR: { // varchar 20 byte
        type: String,
        required: false
    },
    TOKEN_HUELLA: { // Token 2000 byte
        type: String,
        required: false
    },
    FECHA_VENCIMIENTO: { // Date
        type: Date,
        required: false
    },
    FECHA_REG_INICIAL_PERSONA: { // Date
        type: Date,
        required: false
    },
    ESTADO_PERSONA: { // varchar 30 bytes
        type: String,
        required: false
    },
    FECHA_EXP_DOCUMENTO: { // Date
        type: Date,
        required: false
    },
    LUGAR_NACIMIENTO: { // number 5
        type: Number,
        required: false
    },
    CODIGO_BIDIMENSIONAL_CC: { // varchar2 1000 bytes
        type: String,
        required: false
    },
    RUNT_HUELLA_AUTENTICACION: { // Varchar2 400 byte
        type: String,
        required: false
    },
    ID_PAIS_EXPEDICION: { // number
        type: Number,
        required: false
    },
    ID_DEPTO_EXPEDICION: { // number 
        type: Number,
        required: false
    },
    ID_CIUDAD_EXPEDICION: { // Number
        type: Number,
        required: false
    },
    ID_DEPTO_NACIMIENTO: { // Number
        type: Number,
        required: false
    },
    ACTUALIZADO: { // Varchar2 1 byte
        type: String,
        required: false
    },
    MIGRADO: { // Varchar 1 byte
        type: String,
        required: false
    }

};

/* usuario_tto.methods.toJSON = function() { // elmina un campo que no queramos mostrar en el objeto respuesta.
    let user = this;
    let userObject = user.toObject();
    delete userObject.MIGRADO;
    return userObject;
}; */

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Usuario', usuarioSchema);

//module.exports = { usuario_tto };