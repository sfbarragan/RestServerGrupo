const mongoose = require('mongoose');
require('dotenv').config({ path: '.env' });

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        });
        console.log("DB Online");
    } catch (error) { 
        console.log(error);
        throw new Error("Error a la hora de iniciar la DB. Ver logs.");
    }
  };

module.exports = conectarDB