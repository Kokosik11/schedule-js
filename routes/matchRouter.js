const express = require("express");
const matchController = require("../controllers/matchController.js");
const matchRouter = express.Router();

matchRouter.post('/create', matchController.createMatch);
matchRouter.get('/:matchDate', matchController.getMatch);
matchRouter.get('/', matchController.getAllMatches);
    
module.exports = matchRouter;