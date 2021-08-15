const TeamModel = require('../models/Team');

exports.getAllTeams = (req, res) => {
    TeamModel.find({}, (err, teams) => {
        if(err || teams == []) {
            console.log("Команды не найдены");
            res.send({err: "Команды не найдены"})
        }
        else {
            console.log(teams);
            res.send(teams);
        }
    })
}

exports.getTeam = (req, res) => {
    const { teamName } = req.params;

    console.log(req.body)

    TeamModel.findOne({ name: teamName }, (err, team) => {
        if(err || !team) {
            console.log("Команда не найдена")
            res.send({err:"Команда не найдена"});
        }
        else { 
            console.log(team);
            res.send(team);
        }
    })
}

exports.createTeam = (req, res) => {
    const teamName = req.body["teamName"];
    const teamLogoURL = req.body["teamLogoURL"];
    
    console.log(req.body);

    if(!teamName || !teamLogoURL) {
        res.send({
            err: "Укажите название команды или добавьте путь для логотипа"
        })

        return 0;
    }

    const team = new TeamModel({ name: teamName, image: teamLogoURL});

    console.log(team);
    team.save(err => {
        console.log(err);
    });

    res.send(team);
}

exports.getTeamByID = (req, res) => {
    const { teamID } = req.params;

    TeamModel.findById(teamID, (err, team) => {
        if(err) {
            console.log("Команда не найдена")
            res.send({ err: "Команда не найдена"});
        }
        else {
            console.log(team)
            res.send(team);
        }
    })
}