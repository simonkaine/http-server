import app from '../lib/app.js';
import request from 'supertest';
import { readFile } from 'fs/promises.js';

describe('index.html', async () => {
  it('It tests for the return of html from static index.html file', async () => {
    const [response, indexHTML] = await Promise.all([
      request(app).get('/'),
      readFile('../public/index.html', 'utf-8')
    ]);
    expect(response.text).toEqual(indexHTML);
  });   
});
