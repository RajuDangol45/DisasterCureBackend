module.exports = {
  up(db) {
    return db.createCollection('requests', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('requests', function(err, result){});
  }
};

