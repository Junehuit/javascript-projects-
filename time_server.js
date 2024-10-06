const http = require('http');

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function formattedDateTime() {
  const d = new Date();
  return `${d.getFullYear()}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(formattedDateTime() + '\n');
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});