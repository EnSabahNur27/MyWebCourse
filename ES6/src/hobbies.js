const hobbiesArray = [
    { name: 'volleyball', lengthInYearsAtHobby: 25 },
    { name: 'cooking', lengthInYearsAtHobby: 15},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

function logHobby(oneHobby) {
    console.log(`${oneHobby.name}: A hobby for ${oneHobby.lengthInYearsAtHobby} years`)
}

function logHobbies() {
    for (let index = 0; index < hobbiesArray.length; index++) {
        const hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();

function returnHobbiesHTML() {
    let hobbyInfo = `
        <ul>
    `;
    hobbiesArray.forEach(hobby => {
        hobbyInfo+= `<li>${hobby.name} ${hobby.lengthInYearsAtHobby}</li>`;
        });
        hobbyInfo+=`</ul>`;
    return hobbyInfo;
}

function returnHobbiesTable() {
    let hobbyInfo = `
        <table class="table table-bordered table-striped"><tbody>
    `;
    hobbiesArray.forEach(hobby => {
        hobbyInfo+= `<tr><td>${hobby.name}</td><td> ${hobby.lengthInYearsAtHobby}</td></tr>`;
        });
        hobbyInfo+=`</tbody></table>`;
    return hobbyInfo;
}