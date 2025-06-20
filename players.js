// players.js

let players = JSON.parse(localStorage.getItem("players")) || [
    {
        firstName: "Mauricio",
        lastName: "Pochettino",
        position: "Coach",
        image: "../recursos/men-players/player30.webp",
        description: "Главный тренер Chelsea."
    },




{
    firstName: "Marcus",
    lastName: "Bettinelli",
    position: "Goalkeeper",
    image: "путь/к/фото.webp",
    description: "Опытный вратарь...",
    age: 31,
    bio: "Родился в Лондоне, воспитанник Фулхэма...",
    socials: {
        instagram: "https://instagram.com/имя",
        twitter: "https://twitter.com/имя"
    }
},







    {
        firstName: "Robert",
        lastName: "Sanchez",
        position: "Goalkeeper",
        image: "../recursos/men-players/player2.webp",
        description: "Основной вратарь команды."
    }
];

function getPlayers() {
    return players;
}

function addPlayer(player) {
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
}

function deletePlayer(index) {
    players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(players));
}
