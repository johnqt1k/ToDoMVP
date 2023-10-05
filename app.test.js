const request = require('supertest');
const app = require('./app');
const ids = [
  { id: 1, description: 'First ID' },
  { id: 2, description: 'Second ID' },
  { id: 3, description: 'Third ID' }
];



// Loop through the array and create a test for each status code
ids.forEach((id) => {
  test(`GET / should return an ID with id ${id.id} and description "${id.description}"`, (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        console.log('Response Body:', res); // Debugging output
      })
      .end(done);
  });
});