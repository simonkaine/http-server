const { readFile } = require('fs/promises');
const path = require('path');

const getStatic = async (req) => {
  const url = req.url === '/' ? '/index.html' : req.url;
  console.log(url);
  const joinedPath = path.join(__dirname, '../public', url);
  console.log(joinedPath);
  
  try { 
    return await readFile(joinedPath, 'utf-8');
  } catch (error) {
    return null;
  }
};

// const getCSS = async (req) => {
//   const url = req.url === '/' ? 'styles/main.css' : req.url;
//   const joinedPath = path.join(__dirname, '../public', url);
//   try {
//     return readFile(joinedPath, 'utf-8');
//   } catch (error) {
//     return null;
//   }
// };

const app = async (req, res) => {
  // call getStatic in order to read the file and verify that it's correct and send it
  const fileHTML = await getStatic(req);
  // const fileCSS = await getCSS(req);
  console.log(fileHTML);
  if (fileHTML) {
    res.statusCode = 200;
    res.end(fileHTML);
    return;
  // } else if (fileCSS) {
  //   res.statusCode = 200;
  //   res.end(fileCSS);
  //   return;
  // }
  } 
  res.statusCode = 404;
  res.end('more fubar not found!!!!!!!!');
};

module.exports = app;




// import SimpleDb from './SimpleDb';

// const databse = new SimpleDb(rootDir);

// const app = async (req, res) => {
//   // use simpleDb to call on an instance to return path/resource of index.html
//   // if request url === '/' and request method === GET 
//   // get the file 'index.html from databse and return all that
//   // same for CSS
//   // should return 404


//   const indexPath = `${this.rootDir}/index.html`;
//   const cssPath = `${this.rootDir}/styles/main.css`;
//   const getFileData = await databse.getFile('index.html');
//   const getCSSData = await databse.getFile('/styles/main.css');
//   // read file needs to go somewhere?
    
//   if(req.indexPath === '/' && req.method === 'GET') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(getFileData); 

//   } else if (req.cssPath === '/styles/main.css' && req.method === 'GET') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(getCSSData); 

//   } else {
//     res.statusCode = 404;
//     res.end('404: Dog Not Found');  
//   }
// };

// export default app;


