module.exports = {
  up(db) {
    return db.createCollection('requestables', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('requestables', function(err, result){});
  }
};
