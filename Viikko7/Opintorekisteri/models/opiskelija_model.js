const db = require('../database');

const opiskelija = {
  getAll: function(callback) {
    return db.query('select * from opiskelija', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from opiskelija where idopiskelija=?', [id], callback);
  },
  add: function(opiskelija, callback) {
    return db.query(
      'insert into opiskelija (etunimi,sukunimi,osoite,luokkatunnus) values(?,?,?,?)',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from opiskelija where id_opiskelija=?', [id], callback);
  },
  update: function(id, opiskelija, callback) {
    return db.query(
      'update opiskelija set etunimi=?,sukunimi=?, osoite=?, luokkatunnus=? where idopiskelija=?',
      [opiskelija.etunimi, opiskelija.sukunimi, opiskelija.osoite, opiskelija.luokkatunnus, id],
      callback
    );
  }
};
module.exports = opiskelija;