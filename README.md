# Schedule API

## Шаги для запуска проекта

* Инициализация проекта: 
```npm
npm install
```
* Запуск проекта (с помощью nodemon)
```npm
npm run dev
```
* Открытие в браузере

>localhost:3000

## API проекта
---
### GET запросы:

* *"/"* - главная страница
* *"/team/"* - получение списка всех команд
* *"/team/:teamName"* - поиск команды по имени(вместо :teamName вводить название команды)
* *"/team/findByID/:teamID"* - поиск команды по ID(вместо :teamID вводить ID команды)
* *"/match"* - получение списка матчей
* *"/match/:matchDate"* - поиск матча по дате(вместо :matchDate писать дату матча)((( НЕ РАБОТАЕТ КОРРЕКТНО )))

---
### POST запросы: 

* *"/team/create"* - создаёт новую команду. Входные данные(через json):

```JS
const team = {
    teamName: "test",
    teamLogoURL: "/test/test.png"
}
```

* *"/match/create"* - создаёт новый матч. Входные данные(через json):

```JS
let match = {
    matchDate: new Date("12.10.2021"),
    matchTeams: [
        firstTeamID,
        secondTeamID
    ]
}
```

***
### В файле static/scripts/script.js есть примеры запросов
