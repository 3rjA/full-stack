console.log(__dirname, __filename);
const fs = require('fs');
const path = require('path');

console.log('Heippahei node js:sta');
const person = require('./person');
console.log(person);

// luodaan tiedosto 
fs.mkdir(path.join(__dirname, '/testikansio'), {}, err => {
    if (err) throw err;
    console.log('Kansio luotu...');
});


