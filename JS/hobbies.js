class hobbies  {
    constructor (name, lenghtOfTime)  {
        this.name = name;
        this.lengthOfTime = lenghtOfTime;
    }
}

let myHobbies = new Array(new hobbies('DND', 4), new hobbies('VideoGames', 39), new hobbies('Ultimate', 22));

function printHobbies(h)  {
    console.log(`Hobby Name: ${h.name} for ${h.lengthOfTime} years`);
}


myHobbies.forEach(element => {
    printHobbies(element);
});


let band1 = {
    name : "Pink Floyd",
    city : "London" ,
    country : "England",
    yearFormed : 1965,
    genres : ["Progressive rock", "psychedelic rock", "art rock"]
}
band1.genres = new Array("Progressive rock2", "psychedelic rock2", "art rock2");

let band2 = new Object();
band2.name="Poison";
band2.city="Allentown";
band2.country="USA";
band2.yearFormed="1992";
band2.genres=["poprock", "some other genre"];

let bands = [band1, band2];

function printBandInfo(b)  {
    console.log(`Band Name: ${b.name}, Band City: ${b.city}`);
}

bands.forEach(element => {
    printBandInfo(element);
});
