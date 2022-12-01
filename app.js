
// Imported modules
const yargs = require('yargs');
const cli = require('./local_modules/yargsFunc')

// Command for Yargs
// Add data
yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Contact Email',
            demandOption: true,
            type: 'string',
        },
        mobile: {
            describe: 'Contact Mobile Phone number',
            demandOption: false,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile
        };
        // Input the data inside JSON
        cli.saveJSON(argv.name, argv.email, argv.mobile);
    }
})

// List all data
yargs.command({
    command: 'list',
    describe: 'list contact',
    handler() {
        // List all data in JSON
        cli.listJSON();
    }
})

// Search data based of name
yargs.command({
    command: 'search',
    describe: 'search specific contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        // Search the data in JSON based of a names
        cli.searchJSON(argv.name);
    }
})

// Delete data based of name
yargs.command({
    command: 'delete',
    describe: 'delete specific contact',
    builder: {
        name: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        // Search the data in JSON based of a names
        cli.deleteJSON(argv.name);
        console.log('Delete success');
    }
})

// Update data based of name
yargs.command({
    command: 'update',
    describe: 'update specific contact',
    builder: {
        oldname: {
            describe: 'New Contact Name',
            demandOption: true,
            type: 'string',
        },
        newname: {
            describe: 'New Contact Name',
            demandOption: false,
            type: 'string',
        },
        newemail: {
            describe: 'New Contact Email',
            demandOption: false,
            type: 'string',
        },
        newmobile: {
            describe: 'New Contact Mobile Phone number',
            demandOption: false,
            type: 'string',
        }
    },
    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile
        };
        // Input the data inside JSON
        cli.updateJSON(argv.oldname, argv.newname, argv.newemail, argv.newmobile);
        cli.deleteJSON(argv.oldname);
    }
})

yargs.parse();