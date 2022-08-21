const path = require('path');
const http = require('http');
const express = require('express');

//const { host, port } = require(path.join(__dirname, 'config'));

//const server = http.createServer(require("express"));
const server = http.createServer(require(path.join(__dirname, 'app')));

server.listen(8000, "localhost", () => {
    console.log(`Server běží na http://${"localhost"}:${"8000"}...`);
});