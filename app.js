/**
 * basic nodejs
 * // const helper = require("./helpers");
 //object destructuring
 const { sum, min } = require("./helpers");
 
 // core module di node js
 const http = require("http");
 
 const server = http.createServer((req, res) => {
     res.end("Selamat datang di pembelajaran node js real update");
 });
 
 server.listen("3000");
 // end core module
 
 const totalSum = sum(100, 200);
 const totalMin = min(100, 50);
 // const total = helper.sum(100, 200);
 console.log("Total Sum: ", totalSum);
 console.log("Total Min: ", totalMin);
 */

/** 
 * menggunakan npm install express
 * dan nodemon untuk compile
 */
/**
 * penggunaan npm express untuk run nodejs
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hai anda di halaman backe end node js");
});

app.listen("3000");
 */

const fs = require("fs");
const fileName = "target.txt";

/** 
 * event looping 
 */
// fs.watch(fileName, () => console.log(`File changed!`));

/**
 * Asynchronous programming
 */
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

/**
 * Synchronous programming
 */
// const data = fs.readFileSync(fileName);
// console.log(data.toString());

/**
 * function approach
 */
const errHandle = err => console.log(err);
const dataHandle = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
    if (err) errHandle(err);
    dataHandle(data);
})

console.log("Node js async programming ...?");