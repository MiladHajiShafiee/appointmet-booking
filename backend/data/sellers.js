import bcrypt from 'bcryptjs';

const sellerss = [
    {
        name: 'first sellers',
        storename: 'first shop',
        email: 'firstseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'second sellers',
        storename: 'second shop',
        email: 'secondseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'third sellers',
        storename: 'third shop',
        email: 'thirdseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'forth sellers',
        storename: 'forth shop',
        email: 'forthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'fifth sellers',
        storename: 'fifth shop',
        email: 'fifthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'sixth sellers',
        storename: 'sixth shop',
        email: 'sixthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'seventh sellers',
        storename: 'seventh shop',
        email: 'seventhseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'eighth sellers',
        storename: 'eighth shop',
        email: 'eighthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'ninth sellers',
        storename: 'ninth shop',
        email: 'ninthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
    {
        name: 'tenth sellers',
        storename: 'tenth shop',
        email: 'tenthseller@gmail.com',
        password: bcrypt.hashSync('123', 10),
    },
];

export default sellerss;
