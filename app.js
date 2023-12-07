const yargs = require('yargs');
const contacts = require('./contacts');

// mengambiil argument dari command line
// console.log(yargs.argv);

yargs.command({
    command: 'add',
    description: 'menambahkan contact baru',
    //builder ketika command dijalankan bisa menerima apa saja
    builder: {
        nama: {  //isinya adalah object
            describe: "Nama Lengkap", //menjelaskan ini apa
            demandOption: true, //harus diisi ketika bernilai true
            type: 'string',
        },
        email: {
            describe: "Email",
            demandOption: false, //tidak wajib diisi karena bernilai false
            type: 'string',
        },
        noHP: {
            describe: "Nomor HandPhone",
            demandOption: true,
            type: 'string',
        },

    },
    handler(argv) { //akan menerima argument
        contacts.simpanContact(
            argv.nama,
            argv.email,
            argv.noHP
        );
    },
});

yargs.parse()

