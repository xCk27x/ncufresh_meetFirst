const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('mydatabase.db');

app.get('/achievement/:achiId', (req, res) => {
  const achiId = req.params.achiId;
  db.run(`UPDATE users SET achi${achiId} = ? WHERE id = ?`, [true, 1], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Row updated: ${this.changes}`);
    res.send(`Achievement${achiId} for id 1 updated to true`);
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});