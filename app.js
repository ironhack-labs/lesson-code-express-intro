//   name you give	   name of the package you installed
//       |                  |
const myExpress = require('express');

require('dotenv').config();

const PORT = process.env.PORT || 3000; //  Set default port to 3000 if port is not defined

// here we are creating the server here (represents Express app object)
const app = myExpress();

// ///////////////////////////////////////////////////////////////////////////////////////
// stage 2:
// Connect "public/" folder to our express app
// makes everything inside public folder accessible to the rest of the app
app.use(myExpress.static('public'));

// Static files are any content that can be delivered to an end-user without having to be generated, modified, or processed. 
// The server delivers the same file to each user, making static content one of the simplest and most efficient content types 
// to transmit over the Internet. Static files are things like images, CSS, JS files.

// you don’t have to put public/ in the relative path when want to use anything from the public folder - 
// the app will know that if the static file is what you want to show/use, it will look for it inside public folder by default.

// ///////////////////////////////////////////////////////////////////////////////////////

// ***********************************
// ROUTES
// ***********************************

//      '/' => means localhost:3000
//       ^
//       |    callback function as 2nd argument
app.get('/', (req, res, next) => res.send('Hello there!'));

// .get() - the HTTP verb/method needed to access this page
// / - the route that a user will type into the URL bar (the forward slash means this is the root, the website URL)
// request- request here represents the HTTP request. 
//    It is an object that contains all the request information, including the request parameters, the headers, the body of the request, and more.
// response- response is the HTTP response object that we’ll send to the client. 
//    It is an object and contains information about the response, such as headers and any data we need to send to the client (to the browser)
// next- represents the next middleware function that will be executed. 
//    We will use it later to handle errors. This argument is optional and can be skipped if not being used.


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
