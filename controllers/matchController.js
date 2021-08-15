const MatchModel = require('../models/Match');

exports.getAllMatches = (req, res) => {
    MatchModel.find({}, (err, matches) => {
        if(err || matches == []) {
            console.log("Матчи не найдены");
            res.send({err: "Матчи не найдены"})
        }
        else {
            console.log(matches);
            res.send(matches);
        }
    })
}

exports.getMatch = (req, res) => {
    const { matchDate } = req.params;

    // console.log(matchDate)
    // console.log(new Date(matchDate))

    MatchModel.findOne({ matchDate: new Date(matchDate) }, (err, match) => {
        if(err || !match) {
            console.log("Матч не найден")
            res.send({err:"Матч не найден"});
        }
        else { 
            console.log(match);
            res.send(match);
        }
    })
}

exports.createMatch = (req, res) => {
    const matchDate = req.body["matchDate"];
    const matchTeams = req.body["matchTeams"];
    
    console.log(req.body);

    if(!matchDate || !matchTeams) {
        res.send({
            err: "Укажите дату матча и(или) добавьте команды матча"
        })

        return 0;
    }

    console.log(matchTeams)

    const match = new MatchModel({ matchDate: matchDate, teams: [...matchTeams]});

    console.log(match);
    match.save(err => {
        console.log(err);
    });

    res.send(match);
}