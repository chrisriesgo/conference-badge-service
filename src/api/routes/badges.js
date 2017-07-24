import express from "express";
const router = express.Router();

export default ( messageBroker ) => {

    router.get( "/", (req, res, next) => {
        // TODO: return io.adafruit.com/chrisriesgo/feeds/badge
        res.send( messageBroker && messageBroker.defaultMsg ? messageBroker.defaultMsg : "You will get a payload of badge messages from our queue." );
        messageBroker.subscribeToBadgeFeed();
    });

    return router;
}