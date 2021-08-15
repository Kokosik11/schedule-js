const express = require("express");
const teamController = require("../controllers/teamController.js");
const teamRouter = express.Router();

teamRouter.post('/create', teamController.createTeam);
teamRouter.get('/findByID/:teamID', teamController.getTeamByID);
teamRouter.get('/:teamName', teamController.getTeam);
teamRouter.get('/', teamController.getAllTeams);
    
module.exports = teamRouter;