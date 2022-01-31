"use strict";

const Redis = require("ioredis");
const { cyan, red, green } = require("colors/safe");
const { createConnection } = require("typeorm");

const connection = new Redis({
    port: 6379,
    host: process.env.REDISHOST,
    family: 4,
    password: "myweirdpassword", // use config.json if you want (must be a string)
    url: process.env.REDISURL
});

const path = require('path');
const { url } = require("inspector");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

console.log(cyan("Connecting to Database . . ."));

// login into the database and get the connection
(async function connection() {
    await createConnection({
        name: "discordbot",
        type: "postgres",
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: "myswagpassword", // use config.json if you want (must be a string)
        database: process.env.DB_NAME,
    })
})();



