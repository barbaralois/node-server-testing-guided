const server = require('./server.js');
const supertest = require('supertest');

// ALWAYS test for the correct status code!
// Jest tests everything synchronously, so make sure to include the return or the async/await

describe('server', function () {
  it('runs the tests', () => {
    expect(true).toBe(true);
  });

  describe('GET /', () => {
    it('should respond with 200 OK', async () => {
      await supertest(server).get('/').expect(200);
      // OR
      //   await supertest(server)
      //     .get('/')
      //     .then((res) => {
      //       expect(res.status).toBe(200);
      //     });
    });

    it('should respond with JSON', async () => {
      await supertest(server)
        .get('/')
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });

    it('should respond with api: "up"', async () => {
      await supertest(server)
        .get('/')
        .then((res) => {
          expect(res.body.api).toBe('up');
        });
    });
  });
});
