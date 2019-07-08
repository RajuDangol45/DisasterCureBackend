module.exports = {
  up(db) {
    return db.createCollection('users', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('users', function(err, result){});
  }
};
