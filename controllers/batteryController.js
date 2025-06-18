const db = require('../db');

exports.addBattery = (req, res) => {
  const { name, parttype, brand, quantity, price, status } = req.body;
  db.query(
    'INSERT INTO batteries (name, parttype, brand, quantity, price, status) VALUES (?, ?, ?, ?, ?, ?)',
    [name, parttype, brand, quantity, price, status],
    (err, result) => {
      if (err) return res.send(err);
      res.json({ message: 'Battery added', id: result.insertId });
    }
  );
};