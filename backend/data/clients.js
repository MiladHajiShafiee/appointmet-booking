import bcrypt from 'bcryptjs';

const clients = [
    {
        name: 'first client',
        email: 'firstclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'second client',
        email: 'secondclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'third client',
        email: 'thirdclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'forth client',
        email: 'forthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'fifth client',
        email: 'fifthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'sixth client',
        email: 'sixthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'seventh client',
        email: 'seventhclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'eighth client',
        email: 'eighthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'ninth client',
        email: 'ninthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'tenth client',
        email: 'tenthclient@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
];

export default clients;
