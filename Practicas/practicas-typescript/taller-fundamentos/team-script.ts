interface Team {
    name: string;
    points: number;
}

const teams: Team[] = [
    { name: "Colombia", points: 35 },
    { name: "Venezuela", points: 18 },
    { name: "Argentina", points: 32 },
    { name: "Mexico", points: 22 },
    { name: "Honduras", points: 12 },
    { name: "Brasil", points: 45 },
    { name: "Bolivia", points: 20 },
    { name: "Ecuador", points: 39 }
];

const winnerTeams = teams.filter(team => team.points > 31)
    .forEach(team => console.log(team.name, "clasifico"));