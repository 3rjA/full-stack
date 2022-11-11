console.log(__dirname, __filename);
const fs = require('fs');
const path = require('path');

console.log('Heippahei node js:sta');
const person = require('./person');
console.log(person);

// luodaan tiedosto 
/*fs.mkdir(path.join(__dirname, '/testikansio'), {}, err => {
    if (err) throw err;
    console.log('Kansio luotu...');
});*/

// luodaan kansio ja kirjoitetaan siihen 

fs.writeFile(path.join(__dirname, '/testikansio', 'heippa.txt'), 'Terppa maailma!', err => {
if (err) throw err;
console.log('kansio luotu...');
});

