const { connection, createDatabase, createTable } = require('./task2-1');

const databaseName = 'employees';

createDatabase(databaseName);

createTable();

connection.end((error) => {
  if (error) throw error;
  console.log('MySQL connection closed.');
});
