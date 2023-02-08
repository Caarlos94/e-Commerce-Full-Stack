const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 4000

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});
