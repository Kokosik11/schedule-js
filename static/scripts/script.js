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
//         day: "30",
//         month: "8",
//         year: "2021"
//     },
//     matchTeams: []
// };

// fetch('/team/Barris')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         teams.push(json);
//         match.matchTeams.push(json._id)
//     })

// fetch('/team/Griffons')
//     .then(response => response.ok ? response : Promise.reject(response))
//     .then(response => response.json()) // или как текст `response.text()`
//     .then(json => {
//         teams.push(json);
//         match.matchTeams.push(json._id);
//         createMatch(match);
//     })


// console.log(teams);
// console.log(match);

// /* --------------------- Создание матча POST --------------------- */

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

fetch('/match/findByMonth/10')
    .then(response => response.ok ? response : Promise.reject(response))
    .then(response => response.json()) // или как текст `response.text()`
    .then(json => {
        console.log(json)
    })