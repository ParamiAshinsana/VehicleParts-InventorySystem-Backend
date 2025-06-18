const db = require('../db');

exports.addTire = (req, res) => {
  const { name, parttype, brand, quantity, price, status } = req.body;
  db.query(
    'INSERT INTO tires (name, parttype, brand, quantity, price, status) VALUES (?, ?, ?, ?, ?, ?)',
    [name, parttype, brand, quantity, price, status],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ message: 'Tire added', id: result.insertId });
    }
  );
};

exports.getTires = (req, res) => {
  db.query('SELECT * FROM tires', (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
};