require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('middleware/error-handler');
var path = require('path');
// const localtunnel = require('localtunnel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

// request handlers
app.get('/', (req, res) => {
    res.send('Node js Application');
});

// api routes
app.use('/images', express.static('images'));
app.use('/users', require('./users/users.controller'));
app.use('/fichiers', require('./fichiers/fichier.controller'));
app.use('/logs', require('./logs/log.controller'));
app.use('/offres', require('./modules/offres/offre.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));

// //LocalTunnel
// (async () => {
//     const tunnel = await localtunnel({ port: 4000, subdomain: 'jolly-newt-85' });  
//     tunnel.on('close', () => {
//       console.log('Tunnel closed');
//       // tunnels are closed
//     });
//     console.log('-----');
//     console.log('-------> LocalTunnel Active : ' + tunnel.url);
//     console.log('-----');
//   })();

// //Set Global user
// app.use(function(req, res, next) {
//   res.locals.user = req.user;
//   next();
// });