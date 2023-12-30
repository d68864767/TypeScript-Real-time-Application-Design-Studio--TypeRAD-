import request from 'supertest';
import app from '../src/app';
import UserModel from '../src/models/userModel';

describe('User Routes', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser@test.com'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('username', 'testuser');
  });

  it('should not create a user with the same username', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        username: 'testuser',
        password: 'testpassword',
        email: 'testuser2@test.com'
      });
    expect(res.statusCode).toEqual(400);
  });
});

describe('Chat Service', () => {
  it('should send a message', async () => {
    const res = await request(app)
      .post('/chat')
      .send({
        message: 'Hello, World!',
        user: 'testuser'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Message sent successfully');
  });

  it('should not send a message without user or message', async () => {
    const res = await request(app)
      .post('/chat')
      .send({
        message: 'Hello, World!'
      });
    expect(res.statusCode).toEqual(400);
  });
});

afterAll(async () => {
  await UserModel.deleteMany();
});
