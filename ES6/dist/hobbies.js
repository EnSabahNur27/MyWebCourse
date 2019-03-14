'use strict';

var hobbiesArray = [{ name: 'volleyball', lengthInYearsAtHobby: 25 }, { name: 'cooking', lengthInYearsAtHobby: 15 }, { name: 'swimming', lengthInYearsAtHobby: 11 }];

function logHobby(oneHobby) {
    console.log(oneHobby.name + ': A hobby for ' + oneHobby.lengthInYearsAtHobby + ' years');
}

function logHobbies() {
    for (var index = 0; index < hobbiesArray.length; index++) {
        var hobby = hobbiesArray[index];
        logHobby(hobby);
    }
}

logHobbies();

function returnHobbiesHTML() {
    var hobbyInfo = '\n        <ul>\n    ';
    hobbiesArray.forEach(function (hobby) {
        hobbyInfo += '<li>' + hobby.name + ' ' + hobby.lengthInYearsAtHobby + '</li>';
    });
    hobbyInfo += '</ul>';
    return hobbyInfo;
}

function returnHobbiesTable() {
    var hobbyInfo = '\n        <table class="table table-bordered table-striped"><tbody>\n    ';
    hobbiesArray.forEach(function (hobby) {
        hobbyInfo += '<tr><td>' + hobby.name + '</td><td> ' + hobby.lengthInYearsAtHobby + '</td></tr>';
    });
    hobbyInfo += '</tbody></table>';
    return hobbyInfo;
}