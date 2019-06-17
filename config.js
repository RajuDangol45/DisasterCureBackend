module.exports = {
  server: {
    host: '0.0.0.0',
    port: '3000'
  },

  orm: {
    db: {
      client: 'mongodb',
      connection: {
        database: 'disasterCure',
        host: 'localhost'
      }
    }
  },

  backend: {
    url: 'http://localhost:3000'
  },

  auth: {
    tokenLifeTime: 365 * 24 * 3600 * 1000
  },

  headers: {
    authToken: 'auth-token'
  }
}
