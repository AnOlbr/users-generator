const fs = require('fs');
const genders = ['female', 'male'];
const femaleNames = ['Anna', 'Kasia', 'Aleksandra', 'Magda', 'Paulina', 'Karolina', 'Małgorzata', 'Joanna'];
const maleNames = ['Tomasz', 'Karol', 'Piotr', 'Paweł', 'Patryk', 'MAteusz', 'Rafał', 'Artur'];
const lastNames = ['Kowal', 'Nowak', 'Burak', 'Polaczek', 'Sokół', 'Szwaczek', 'Gorzela', 'Woźniak'];

const randChoice = (arr) =>{
    const randElem = Math.floor(Math.random() * arr.length);
    return arr[randElem];
}

function randAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const people = [];

for (let i=1 ; i<=20 ; i++){
    const person = {};
    person.id = i;
    person.gender = randChoice(genders);
    if (person.gender === 'male'){
        person.name = randChoice(maleNames);
    } else {
        person.name = randChoice(femaleNames);
    }
    person.lastName = randChoice(lastNames);
    person.age = randAge(18, 78);
    person.email = person.name.toLowerCase() + '.' + person.lastName.toLowerCase() + '@gmail.com';
    let phone = [];
    let phoneNumber = '';
    for(let i=0 ; i<9 ; i++){
        const number = randAge(1,9);
        phone.push(number);
    }
    phoneNumber = phone.join('');
    person.phoneNumber = phoneNumber;
    people.push(person);
}

const peopleData = JSON.stringify(people);
const data = new Uint8Array(Buffer.from(peopleData));
fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });