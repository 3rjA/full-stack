console.log(__dirname, __filename);

console.log('Heippahei node js:sta');
const person = require('./person');
console.log(person);

// luodaan tiedosto tiedoston sisälle
FileSystem.mkdir(path.join(__dirname, '/testikansio'), {}, err =>{
    if (err) throw err;
    console.log('Kansio luotu...');
});


