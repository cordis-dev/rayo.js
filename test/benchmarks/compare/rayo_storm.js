const rayo = require('../../../packages/rayo');

const app = rayo({ port: 5050, storm: true });
const handler = (req, res) => {
  res.end(`Thunderstruck... ${req.params.alias}`);
};

app.get('/users/:alias', handler).start();
