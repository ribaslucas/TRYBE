const mysqlx = require('@mysql/xdevapi');

let schema;
const connection = () => {
  return schema
    ? Promise.resolve(schema)
    : mysqlx
        .getSession({
          user: 'root',
          password: 'senha123',
          host: 'localhost',
          port: 33060,
          schema: 'mvc_example',
        })
        .then((session) => {
          schema = session.getSchema('mvc_example');
          return schema;
        })
        .catch((err) => {
          console.error(err);
          process.exit(1);
        });
};

module.exports = connection;
