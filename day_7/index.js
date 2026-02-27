const http = require('http');
const url = require('url');
const port = 3000;

//const server = http.createServer((req, res) => {
//     res.end("Hello World");
// });
// server.listen(port, () => console.log(`Server is running at http://localhost:${port}`)); 
    const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to the Home Page</h1>');
    } else switch (req.url) {
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>About Us</h1>');
            break;
        case '/contact':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
            break;
        case '/services':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Our Services</h1><ul><li>Web Development</li><li>App Development</li><li>SEO</li></ul>');
            break;
        case '/login':
           const queryObject = url.parse(req.url, true).query;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Login Page</h1><form><input type="text" placeholder="Username"><br><input type="password" placeholder="Password"><br><button type="submit">Login</button></form>');
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
});

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));