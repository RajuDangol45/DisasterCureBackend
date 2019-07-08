module.exports = {
  up(db) {
    return db.createCollection('comments', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('comments', function(err, result){});
  }
};
