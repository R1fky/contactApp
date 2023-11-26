const fs = require("fs");

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

//membuat dir/folder data jika belum ada 
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file json jika belum ada 
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8');
}

//punya sendiri
rl.question('Masukkan nama anda : ', (nama) => {
    rl.question('Masukkan No HP anda : ', (noHp) => {

        const contact = { nama, noHp} ;
        const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(fileBuffer);

        contacts.push(contact);

        fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

        console.log(contacts);
        console.log('Terima kasi sudah memasukkan data');

        rl.close();
    });
});
