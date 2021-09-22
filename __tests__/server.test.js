const app = require('../lib/app.js');
const request = require('supertest');
const { readFile } = require('fs/promises');

describe('static server tests', () => {

  it('It tests for the return of html from static index.html file', async () => {
    const [response, file] = await Promise.all([
      request(app).get('/'),
      readFile('./public/index.html', 'utf-8')
    ]);
    expect(response.text).toEqual(file);
  });  
  
  it('It tests for the return of CSS from GET of /styles/main.css', async () => {
    const [response, file] = await Promise.all([
      request(app).get('/styles/main.css'),
      readFile('./public/styles/main.css', 'utf-8')
    ]);
    expect(response.text).toEqual(file);
  });  
  
});
  
