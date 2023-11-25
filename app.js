const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


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


//contact memakai callback
rl.question("siapa nama anda ?? ", (nama) => {
  rl.question("masukkan no hp: ", (noHP) => {
    const contact = { nama, noHP };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);

    contacts.push(contact); //
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

    console.log("Terima kasih sudah memasukkan data");
    rl.close();
  });
});
