 // Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    date = today.getDate();
    time = new Date().getHours();
    message = "Good morning"
    if (time > 12 && time < 18) {
        message = "Good afternoon";
    }
    else if (time > 17 && time < 21) {
      message = "Good evening";
    }
    else if (time > 20) {
      message = "Good night";
    }
    // Send the response with the current date from the 'today' module
    res.end(`${message}! Right now, it is ${date}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
