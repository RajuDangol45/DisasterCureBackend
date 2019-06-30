module.exports = {
  up(db) {
    return db.createCollection('helps', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('helps', function(err, result){});
  }
};
