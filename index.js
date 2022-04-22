const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
},
{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
}]
app.get('/', (req, res) => {
    res.send('Hello to Node from Saima ^_^');
});
app.get('/users', (req, res) => {
    // console.log("query",req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const result = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(result);
    }
    else{
        req.send(users);
    }
});
app.get('/user/:userid', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.userid);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.post('/users', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.listen(port, () => {
    console.log('listening to the port', port);
})