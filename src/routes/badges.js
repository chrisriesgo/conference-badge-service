import express from "express";
const router = express.Router();

router.get( "/", (req, res, next) => {
    // TODO: return io.adafruit.com/chrisriesgo/feeds/badge
    res.send( "You will get a payload of badge messages from our queue." );
});

export default router;