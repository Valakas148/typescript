var test = { id: 1, name: "Ilya", rate: [100, 99, 100, 100] };
console.log(test);
var user = {
    id: 1,
    name: 'ilya',
    username: 'bych',
    email: 'agasg@gmail.com',
    address: {
        street: 'Lvivska',
        suite: 'Sykhiv',
        city: 'Lviv',
        zipcode: '79003',
        geo: {
            lat: '123',
            lng: '321'
        }
    },
    phone: '0990009911',
    website: 'vagcentre',
    company: {
        name: 'vag',
        catchPhrase: 'vagcentre',
        bs: '333'
    }
};
console.log(user);
/*
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res)
    .then(users =>{
        console.log(users);
    })*/
