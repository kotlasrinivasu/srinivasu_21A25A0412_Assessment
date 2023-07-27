const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql123',
  database: 'employees'
});
function createDatabase(employees) {
  connection.query(`CREATE DATABASE IF NOT EXISTS employees`, (error, results) => {
    if (error) throw error;
    console.log(`Database "employees" created successfully.`);
  });
}

function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      department VARCHAR(100),
      salary DECIMAL(10, 2)
    )
  `;
  connection.query(sql, (error, results) => {
    if (error) throw error;
    console.log('Table "employees" created successfully.');
  });
}

module.exports = {
  connection,
  createDatabase,
  createTable,
};
