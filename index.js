const express = require('express');
const app = express();
const Friends = require('./model/FriendList');

const PORT = process.env.PORT || 4000;

 app.get('/friends', (req, res) => {
     res.json(Friends)
 });

app.get('/friends/:id',(req, res) =>{
    const found = friends.some(friend => friend.id === parseInt(req.params.id));
    if (found){
        res.json(friends.filter (friend.id === parseInt(req.params.id)));

    } else{
        res.status(400).json({msg: ` nop friend with the id of ${req.params}`});
    }
    

});

// //post
// app.post ('/friends', (req, res) => {
    

app.listen(PORT, () => console.log(`server started on port ${PORT}`));