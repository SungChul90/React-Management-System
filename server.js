const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send( [
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : 'SungChul',
        'birthday' : '123456',
        'gender' : 'Male',
        'job' : 'Web Developer'
      },
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : 'Matthew',
        'birthday' : '456789',
        'gender' : 'Male',
        'job' : 'Dental Technician'
      
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : 'Hong',
        'birthday' : '123789',
        'gender' : 'Male',
        'job' : 'Student'
      
      }]
      )
})

app.listen(port, ()=> console.log(`Listening on port ${port}`));