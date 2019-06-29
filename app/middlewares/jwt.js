const expressJwt = require('express-jwt');
const config = require('../../config');
const userService = require('../actions/users');

function jwt() {
  const key = config.auth.secret;
  return expressJwt({ key, isRevoked }).unless({
    path: [
      { url: /^\/users\/.*/, methods: ['GET'] },
      { url: '/disasters', methods: ['GET'] },
      { url: /^\/disasters\/.*/, methods: ['GET'] }
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getUser(payload.sub);

  if (!user) {
    return done(null, true);
  }

  done();
};

module.exports = jwt;
