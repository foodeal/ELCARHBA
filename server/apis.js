const db = require('helpers/db');
// Search engine with autocomplete
app.get('/search', function(req, res) {
    db.query('SELECT * FROM * WHERE name LIKE "%' + req.query.term + '%"',
    function(err, rows, fields) {
        if (err) throw err;
        var data = [];
          for (i = 0; i < rows.length; i++) {
          data.push(rows[i].name);
          }
    res.end(JSON.stringify(data));
    });
});
