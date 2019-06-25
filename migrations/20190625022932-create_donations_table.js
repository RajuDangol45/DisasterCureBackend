module.exports = {
  up(db) {
    return db.createCollection('donations', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('donations', function(err, result){});
  }
};
