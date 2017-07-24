import config from "./config/";
import messageBroker from "./services/broker";
import server from "./api";

const app = {
    config
};

app.broker = messageBroker( app );
app.server = server( app );

export default app;