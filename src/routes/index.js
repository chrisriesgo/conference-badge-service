import express from "express";
const router = express.Router();

router.get( "/", (req, res, next) => {
    res.send( "Nothing here yet." );
});

export default router;