import mqtt from "mqtt";

const serverUrl = "io.adafruit.com";
const messageBroker = {
    onError: "There was a problem getting the data",
    defaultMsg: "Proxy through the service"
};

export default ( app ) => {
        // TODO: move this assertion logic elsewhere to make it reusable
        if( !app.config.adafruit.username ) {
            throw new Error( "No Adafruit IO username was provided" );
        }
        if( !app.config.adafruit.apiKey ) {
            throw new Error( "No Adafruit IO API key was provided" );
        }

        const client = mqtt.connect("mqtts://io.adafruit.com", {
        port: 8883,
        username: app.config.adafruit.username,
        password: app.config.adafruit.apiKey
    })

    client.on( "connect", () => {
        console.log( "Connected to io.adafruit.com" );
    })

    client.on( "message", (topic, message) => {
        console.log( message.toString() );
    })

    messageBroker.subscribeToBadgeFeed = () => {
        console.log( "Attempting to subscribe to /f/badge" );
        if( client.connected ) {
            client.subscribe( "chrisriesgo/f/badge" );
        }
    };

    return messageBroker;
}