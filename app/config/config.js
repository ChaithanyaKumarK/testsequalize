module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "Chaithanya@123",
  DB: "test_sequalize",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};