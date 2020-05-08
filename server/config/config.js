// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Base de datos
//usuarioAtlasMongoDb: vacalaobans
//password: 5nvsqZ3h6T1XqXwg
// mongodb+srv://vacalaobans:5nvsqZ3h6T1XqXwg@beautiful-uy9ik.mongodb.net/test
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;