/* --------------------- Создание команды POST --------------------- */

// const team = {
//     teamName: "Barris",
//     teamLogoURL: "/img/logo-2.png"
// }

// let response = fetch('/team/create', {
//     method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(team)
// })
//     .then(res => res)
//     .then(data => {
//         console.log(data.json());
//     })

/* --------------------- Получение команд и создание объекта матча GET --------------------- */


// let teams = [];
// let match = {
//     matchDate: {
//         time: "12:00",
//         day: "7",
//         month: "9",
//         year: "2021"
//     },
//     matchTeams: []
// };

// fetch('/team/Barris')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         teams.push(json);
//         let team = {};
//         team.id = json._id;
//         team.name = json.name;
//         team.image = json.image;
//         match.matchTeams.push(team)
//     })

// fetch('/team/Griffons')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         teams.push(json);
//         let team = {};
//         team.id = json._id;
//         team.name = json.name;
//         team.image = json.image;
//         match.matchTeams.push(team)
//         createMatch(match);
//     })

// // fetch('/team/Dinamo')
// //     .then(response => response.ok ? response : Promise.reject(response))
// //     .then(response => response.json()) // или как текст `response.text()`
// //     .then(json => {
// //         teams.push(json);
// //         let team = {};
// //         team.id = json._id;
// //         team.name = json.name;
// //         team.image = json.image;
// //         match.matchTeams.push(team)
// //         createMatch(match);
// //     })


// console.log(teams);
// console.log(match);

// // /* --------------------- Создание матча POST --------------------- */

// const createMatch = (match) => {
//     let response = fetch('/match/create', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(match)
//     })
//         .then(res => res)
//         .then(data => {
//             console.log(data.json());
//         })
// }

/* --------------------- Получение списка матчей и получение команды по ID --------------------- */

// fetch('/match')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         fetch(`/team/findByID/${json[0].teams[0]}`).then(response => response.ok ? response : Promise.reject(response))
//             .then(response => response.json()) // или как текст `response.text()`
//             .then(json => {
//                 console.log(json);
//             })
//     })

// fetch('/match/findByMonth/10')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         console.log(json)
//     })




Date.prototype.daysInMonth = function() {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

const date = new Date();
date.setMonth(date.getMonth(), 1);

const renderMonth = (month) => {
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    const monthDOM = document.querySelector('.month');

    console.log(date)

    monthDOM.innerHTML = months[month];
    getCeils(date);
}

const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
    arrow.onclick = () => {
        date.setMonth(date.getMonth() + +arrow.dataset.direction, 1);
        renderMonth(date.getMonth());
    }
})

const renderCeils = (ceils) => {
    const ceilsDOM = document.querySelector('.ceils-content');
    ceilsDOM.innerHTML = "";

    ceils.forEach(ceil => {
        if(ceil.teams) {
            console.log(ceil.teams)
            let ceilDOM = `<div class="date"><span class="day">${ceil.day}</span><span class="date-content"><img src="${ceil.teams[0].image}"><img src="${ceil.teams[1].image}"></span></div>`
            ceilsDOM.innerHTML += ceilDOM;
        } 
        else {
            let ceilDOM = `<div class="date"><span class="day">${ceil.day}</span><span class="date-content"></span></div>`
            ceilsDOM.innerHTML += ceilDOM;
        }
    })
}

const getCeils = (date) => {
    fetch(`/match/findByMonth/${date.getMonth() + 1}/${date.getFullYear()}`)
        .then(response => response.ok ? response : Promise.reject(response))
        .then(response => response.json()) // или как текст `response.text()`
        .then(json => {
            console.log(json)
            let ceils = [];
            for(let i = 0; i < date.daysInMonth(); i++) {
                ceils.push( { day: i + 1 });
            }

            if(!json.err) {
                json.forEach(j => {
                    for(i = 0; i < ceils.length; i++) {
                        if(j.matchDate.day == ceils[i].day) {
                            ceils[i] = { day: i + 1, teams: [...j.teams] };
                        }
                    }
                })
            }
            // ceils = new Set(ceils);
            console.log(ceils)
            renderCeils(ceils);
        })
}

renderMonth(date.getMonth());
