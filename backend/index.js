
const express = require('express')
const app = express()
const port = 3000

//post req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import routes
const authRoute = require('./routes/auth');

//route middleware

app.use('/api/user', authRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})