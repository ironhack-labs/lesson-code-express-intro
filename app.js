//   name you give	   name of the package you installed
//       |                  |
const myExpress = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000; //  Set default port to 3000 if port is not defined

// here we are creating application
const app = myExpress();

// ///////////////////////////////////////////////////////////////////////////////////////
// stage 2:
// Connect "public/" folder to our express app
// makes everything inside public folder accessible to the rest of the app
app.use(myExpress.static('public'));

// ///////////////////////////////////////////////////////////////////////////////////////

// ***********************************
// ROUTES
// ***********************************

//      '/' => means localhost:3000
//       ^
//       |    callback function as 2nd argument
app.get('/', (req, res, next) => res.send('Hello there!'));

// ///////////////////////////////////////////////////////////////////////////////////////
// stage 2:
// localhost:3000/homepage
app.get('/homepage', (req, res, next) =>
  res.sendFile(__dirname + '/views/home.html')
);

app.get('/about', (req, res, next) =>
  res.sendFile(__dirname + '/views/about.html')
);
// ///////////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => console.log('🏃‍ on port 3000'));
