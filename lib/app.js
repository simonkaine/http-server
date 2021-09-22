const { readFile } = require('fs/promises');
const path = require('path');

const getStatic = async (req) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  const joinedPath = path.join(__dirname, '../public', url);

  try { 
    return await readFile(joinedPath, 'utf-8');
  } catch (error) {
    return null;
  }
};

const app = async (req, res) => {
  // call getStatic in order to read the file and verify that it's correct and send it
  const file = await getStatic(req);

  if (file) {
    res.statusCode = 200;
    res.end(file);
    return;
  }
  res.statusCode = 404;
  res.end('more fubar not found!!!!!!!!');
};

module.exports = app;


