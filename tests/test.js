var assert = require('assert');
const User = require('../app/actions/users');
const Disaster = require('../app/actions/disaster');
const Requestable = require('../app/actions/requestable');
const Help = require('../app/actions/help');
const Request = require('../app/actions/request');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/disasterCure';

beforeAll(async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
});

afterAll(async () => {
  await mongoose.connection.close();
})

describe('User', function () {
  describe('#get /', function () {
    it('should return all users data from database without error', function (done) {
      return User.getAllUsers()
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        })
    });
  });
  describe('#post /add', function () {
    it('should add user data to database and return added user data without error', function (done) {
      let user = {
        firstName: 'TestName',
        lastName: 'TestLastName',
        password: 'password',
        email: 'test@test.com',
        age: 80,
        photo: 'image.jpg'
      };

      return User.addUser(user)
        .then((res) => {
          expect(res.email).toEqual(user.email);
          done();
        })
    });
  });
  describe('#get /:id', function () {
    it('should get user data from database without error', function (done) {
      let user = {
        id: '5d20d33686db7e3c40a4bb1d',
        firstName: 'TestName',
        lastName: 'TestLastName',
        password: 'password',
        email: 'ab_de@gmail.com',
        age: 80,
        photo: 'image.jpg'
      };

      return User.getUserById(user.id)
        .then((res) => {
          expect(res.email).toEqual(user.email);
          done();
        })
    });
  });
  describe('#get /update', function () {
    it('should update user data in database without error', function (done) {
      let user = {
        id: '5d20d33686db7e3c40a4bb1d',
        firstName: 'TestName',
        lastName: 'TestLastName',
        password: 'password',
        email: 'ab_de@gmail.com',
        age: 80,
        photo: 'image.jpg'
      };

      return User.updateUser(user)
        .then((res) => {
          expect(res.email).toEqual(user.email);
          done();
        })
    });
    it('should return user data in database without error', function (done) {
      let user = {
        id: '5d20d33686db7e3c40a4bb1d',
        firstName: 'TestName',
        lastName: 'TestLastName',
        password: 'password',
        email: 'ab_de@gmail.com',
        age: 80,
        photo: 'image.jpg'
      };

      return User.updateUser(user)
        .then((res) => {
          expect(res.age).toEqual(user.age);
          done();
        })
    });
  });
})

describe('Disaster', () => {
  describe('#get /', function () {
    it('should return all disasters data from database without error', function (done) {
      return Disaster.getAllDisasters()
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        })
    });
  });
  describe('#post /add', function () {
    it('should add disaster data to database and return added disaster data without error', function (done) {
      let disaster = {
        title: "Test",
        description: "More than 400 people are reported dead after a tsunami struck western",
        injury_count: 300,
        death_count: 110,
        location: "Indonesia",
        images: ['image.jpg'],
        latitude: 27.233,
        longitude: 85.33,
      };

      return Disaster.addDisaster(disaster)
        .then((res) => {
          expect(res.title).toEqual(disaster.title);
          done();
        })
    });
  });
  describe('#get /:id', function () {
    it('should get disaster data from database without error', function (done) {
      let disaster = {
        id: "5d23766534f14734102abbab",
        title: "Test",
        description: "More than 400 people are reported dead after a tsunami struck western",
        injury_count: 300,
        death_count: 110,
        location: "Indonesia",
        images: ['image.jpg'],
        latitude: 27.233,
        longitude: 85.33,
      };

      return Disaster.getDisasterById(disaster.id)
        .then((res) => {
          expect(res.title).toEqual(disaster.title);
          done();
        })
    });
  });
});

describe('Requestable', () => {
  describe('#get /', function () {
    it('should return all requestables data from database without error', function (done) {
      return Requestable.getAllRequestables()
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        })
    });
  });
  xdescribe('#post /add', function () {
    it('should add requestable data to database and return added requestable data without error', function (done) {
      let requestable = {
        requestable_name: "Bed",
        worth: 1000
      };

      return Requestable.addRequestable(requestable)
        .then((res) => {
          expect(res.requestable_name).toEqual(requestable.requestable_name);
          done();
        })
    });
  });
  describe('#get /:id', function () {
    it('should get requestable data from database without error', function (done) {
      let requestable = {
        id: '5d23782e7ca70d1dc486345e',
        requestable_name: "Bed",
        worth: 1000
      };

      return Requestable.getRequestableById(requestable.id)
        .then((res) => {
          expect(res.requestable_name).toEqual(requestable.requestable_name);
          done();
        })
    });
  });
});

describe('Help', () => {
  describe('#get /', function () {
    it('should return all helps data from database without error', function (done) {
      return Help.getAllHelps()
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        })
    });
  });
  describe('#post /add', function () {
    it('should add helps data to database and return added helps data without error', function (done) {
      let help = {
        id: '5d237af80382930ec41c2dea',
        request_id: "5d08cd4066445d3bdc8e4546",
        helped_units: 1,
        helped_by: "5d08cc1566445d3bdc8e4541",
        help_date: "2019-06-18T11:33:41.857Z",
        help_title: "Help Title 1",
        pending: false,
        help_worth: 10
      };

      return Help.addHelp(help)
        .then((res) => {
          expect(res.help_title).toEqual(help.help_title);
          done();
        })
    });
  });
  describe('#get /:id', function () {
    it('should get helps data from database without error', function (done) {
      let help = {
        id: '5d237af80382930ec41c2dea',
        request_id: "5d08cd4066445d3bdc8e4546",
        helped_units: 1,
        helped_by: "5d08cc1566445d3bdc8e4541",
        help_date: "2019-06-18T11:33:41.857Z",
        help_title: "Help Title 1",
        pending: false,
        help_worth: 10
      };

      return Help.getHelpById(help.id)
        .then((res) => {
          expect(res.pending).toEqual(help.pending);
          expect(res.helped_units).toEqual(help.helped_units);
          done();
        })
    });
  });
});

describe('Request', () => {
  describe('#get /', function () {
    it('should return all request data from database without error', function (done) {
      return Request.getAllRequests()
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        })
    });
  });
  describe('#post /add', function () {
    it('should add requests data to database and return added requests data without error', function (done) {
      let request = {
        id: "5d20f2aa4a41d42fc4df48c5",
        requestable_id: "5d08cd4066445d3bdc8e4544",
        requested_units: 10,
        received_units: 0,
        disaster_id: "5d10feac28ef152f2c32db43",
        request_title: "Sample Title",
        requested_on: "Sun Jul 07 2019 00:57:42 GMT+0545 (Nepal Time)",
      };

      return Request.addRequest(request)
        .then((res) => {
          expect(request.request_title).toEqual(request.request_title);
          done();
        })
    });
  });
  describe('#get /:id', function () {
    it('should get requests data from database without error', function (done) {
      let request = {
        id: "5d20f2aa4a41d42fc4df48c5",
        requestable_id: "5d08cd4066445d3bdc8e4544",
        requested_units: 10,
        received_units: 0,
        disaster_id: "5d10feac28ef152f2c32db43",
        request_title: "Sample Title",
        requested_on: "Sun Jul 07 2019 00:57:42 GMT+0545 (Nepal Time)",
      };

      return Request.getRequestById(request.id)
        .then((res) => {
          expect(res.request_title).toEqual(request.request_title);
          done();
        })
    });
  });
});
