const path = require ('path');
const fs = require ('fs');
const path = require('path');

function html(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Title</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class=display-4>Hi! My name is ${data.name}</h1>
                <p class="lead">I am from ${data.location}.</p>
                <br>
                <p>${data.bio}</p>
                <h3>Contact me:</h3>
                <ul class="list-group">
                    <li class="list-group-item"> <a href=${data.github}>My Github</a></li>
                    <li class="list-group-item"><a href=${data.linkedin}>My LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
    </body>
    
    </html>
    `}
module.exports = html;