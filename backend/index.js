const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('mydatabase.db');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 允许所有来源访问
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.set('/achievement/:achiId/:var', (req, res) => {
  const achiId = req.params.achiId;
  const var1 = req.params.var;
  db.run(`UPDATE groups SET achi${achiId} = ? WHERE id = ?`, [var1, 1], (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`achi${achiId} updated: ${this.changes}`);
    res.send(`Achievement${achiId} for id 1 updated to true`);
  });
});

app.get('/achievement', (req, res) => {
  const achiId = req.params.achiId;
  db.get(`SELECT achi1, achi2, achi3, achi4 FROM groups WHERE id = ?`, [1], (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(row);
  })
});

app.get('/achievement/:achiId', (req, res) => {
  const achiId = req.params.achiId;
  db.get(`SELECT achi${achiId} FROM groups WHERE id = ?`, [1], (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    res.json(row);
  })
});
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});