# Connecting the webpage with a Node.js server 

## 1. Projecst folders and files structure

The project files have been extracted and the structure includes two main directories: **public** and **server**

This likely indicates that **public** contains your **frontend** assets (like HTML, CSS, JavaScript files) and server contains your backend code.

## 2. Frontend (public directory)

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/af72ac1b-b419-4621-9b79-c99d3641d6a2)

**index.html**: The HTML file, which is likely the main entry point for your user interface.

**styles.css**: The CSS file for styling your frontend.

**script.js**: The JavaScript file, presumably containing the logic for interacting with the backend.

## 3. Backend (server directory)

![image](https://github.com/luiscoco/HTML-CSS-JavaScript-sample3/assets/32194879/7987fad8-6dcd-4930-b807-12ec80a7f9da)

**server.js**: The Node.js server file, which should handle API requests from the frontend.

**package.json**: The Node.js package configuration file, which includes dependencies and possibly scripts for running the server.

## 4. Frontend source code

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Interactive Dashboard</h1>
    </header>
    <main>
        <form id="inputForm">
            <input type="text" placeholder="Enter your name" required />
            <input type="range" min="0" max="100" value="50" id="slider" />
            <button type="submit">Submit</button>
        </form>

        <div class="tabs">
            <button class="tablinks" onclick="openCity(event, 'London')">London</button>
            <button class="tablinks" onclick="openCity(event, 'Paris')">Paris</button>
            <div id="London" class="tabcontent">
                <h3>London</h3>
                <p>London is the capital city of England.</p>
            </div>
            <div id="Paris" class="tabcontent">
                <h3>Paris</h3>
                <p>Paris is the capital of France.</p>
            </div>
        </div>
        
        <button id="loadData">Load Data</button>
        <div id="dataContainer"></div>
    </main>
    <script src="script.js"></script>
</body>
</html>
```

**script.js**

```javascript
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById('loadData').addEventListener('click', function() {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '<p>Loading data...</p>';

    // Fetching data from the backend
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = `<p>${data.info}</p>`;
        })
        .catch(error => {
            container.innerHTML = `<p>Error loading data: ${error}</p>`;
        });
});
```

**styles.css**

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    width: 100%;
    text-align: center;
}

main {
    padding: 20px;
}

.tabcontent {
    display: none;
    padding: 20px 0;
    border-top: none;
}

#dataContainer {
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
}
```

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


