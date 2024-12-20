const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils')
const dotenv = require("dotenv");
// dotenv.config({ path: "../.env" });
dotenv.config({ path: "./.env" });


const StartServer = async() => {
    console.log( 'env port', process.env.PORT);
    const app = express();
    
    await databaseConnection();

    const channel = await CreateChannel()

    await expressApp(app, channel);
    

    app.listen(PORT, () => {
          console.log(`listening to port ${PORT}`);
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
    .on('close', () => {
        channel.close();
    })
    

}

StartServer();
