const Pool = require('pg').Pool
const pool = new Pool({
    user: "todolist",
    password: "1234",
    host: "localhost",
    port: "5432",
    database: "todolist_base"
})

module.exports = pool
