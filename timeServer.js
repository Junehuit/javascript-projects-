const http = require('http');
const url = require('url');

// Function to parse time into hour, minute, and second
function parseTime(isoTime) {
  const date = new Date(isoTime);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

// Function to get UNIX epoch time
function getUnixTime(isoTime) {
  const date = new Date(isoTime);
  return { unixtime: date.getTime() };
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const isoTime = parsedUrl.query.iso;

  let result;

  // Check the endpoint and execute the appropriate function
  if (pathname === '/api/parsetime') {
    result = parseTime(isoTime);
  } else if (pathname === '/api/unixtime') {
    result = getUnixTime(isoTime);
  }

  // Send the response in JSON format
  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});

// Listen on the port provided as the first command-line argument
const port = process.argv[2] || 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});