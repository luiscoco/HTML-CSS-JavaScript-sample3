# Connecting the webpage with a Node.js server 

## 1. Projecst folders and files structure

The project files have been extracted and the structure includes two main directories: **public** and **server**

This likely indicates that **public** contains your **frontend** assets (like HTML, CSS, JavaScript files) and server contains your backend code.

## 2. Frontend (public directory)**

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/af72ac1b-b419-4621-9b79-c99d3641d6a2)

**index.html**: The HTML file, which is likely the main entry point for your user interface.

**styles.css**: The CSS file for styling your frontend.

**script.js**: The JavaScript file, presumably containing the logic for interacting with the backend.

## 3. Backend (server directory)**

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/7987fad8-6dcd-4930-b807-12ec80a7f9da)

**server.js**: The Node.js server file, which should handle API requests from the frontend.

**package.json**: The Node.js package configuration file, which includes dependencies and possibly scripts for running the server.

## 4. Frontend source code



## 5. Backend source code

**server.js**

```javascript
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
    res.json({ info: 'Luis Data from backend' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
```

And the dependencies are defined in the package.json file

**package.json**

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "Backend for the web application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5"
  },
  "author": "",
  "license": "ISC"
}
```

## 6. How to run the server application

We first install the project dependencies

```
npm install
```

Then we run the server.js file

```
node server.js
```

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/aa36075e-4fad-4553-8c83-606d6c384d32)

We can verify the server endpoint: http://localhost:3000/api/data

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/378c1be3-376e-4de3-b0bd-934f8964895f)



## 7. How to run the client application


