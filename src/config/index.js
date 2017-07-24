import _ from "lodash";
import path from "path";
import fs from "fs";

const customPath = path.resolve( "./config.js" );

const custom = fs.existsSync( customPath ) ? require( customPath ) : {};
const defaults = require( "./defaults.js" );

const config = _.defaultsDeep( custom, defaults );

export default config;