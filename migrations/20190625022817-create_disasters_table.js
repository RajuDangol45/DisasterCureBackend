module.exports = {
  up(db) {
    return db.createCollection('disasters', {
      autoIndexId: true
    });
  },

  down(db) {
    return db.dropCollection('disasters', function(err, result){});
  }
};
