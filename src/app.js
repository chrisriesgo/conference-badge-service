import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import index from "./routes/index";
import badges from "./routes/badges";

const app = express();
const port = process.env.PORT || 3000;

app.use( logger( "dev" ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cookieParser());
app.use( express.static( path.join( __dirname, "public" ) ) );

app.use( "/", index );
app.use( "/badges", badges );

app.listen( port, () => {
  console.log(`Example app listening on port ${port}!`)
})

export default app;