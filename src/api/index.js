import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import index from "./routes/index";
import badges from "./routes/badges";

export default ( app ) => {
    const server = express();

    const port = app.config.server.port;

    server.use( logger( "dev" ) );
    server.use( bodyParser.json() );
    server.use( bodyParser.urlencoded( { extended: false } ) );
    server.use( cookieParser());
    server.use( express.static( path.join( __dirname, "public" ) ) );

    server.use( "/", index );
    server.use( "/badges", badges( app.broker ) );

    server.listen( port, () => {
        console.log(`Example app listening on port ${port}!`)
    })

    return server;
}