const express = require('express');
const app= express();
const User= require('./router/user');
const mongoConnect= require('./util/db'); 

app.use('/user',User);

mongoConnect((client)=>{
    console.log(client);
    app.listen(3000);
})