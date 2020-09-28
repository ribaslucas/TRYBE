const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx
    .getSession({
      user: 'root',
      password: 'Vemprariba001',
      host: 'localhost',
      port: 3306,
      schema: 'mvc_example',
    })
    .then((session) => {
      return session.getSchema('mvc_example');
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
