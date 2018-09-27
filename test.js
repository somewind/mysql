var mysql = require('./index')
const connection = mysql.createConnection({
  host: 'ricterz.me',
  port: 3307,
  user: 'root',
  password: '123123',
  database: 'asd',
  connectTimeout: 3000,
  charset: 'UTF8_GENERAL_CI',
  flags: [
    '-LOCAL_FILES'
  ]
})

connection.query({
  sql: 'select sysdate()', // sql:"SELECT * FROM db_yt_test_cdb.test1",
  timeout: 1500
}, (err, results, fields) => {
  connection.end();
  console.log(err, results, fields)
})