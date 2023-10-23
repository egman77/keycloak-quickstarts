import express from 'express';
import Keycloak from 'keycloak-connect';
import keycloak_config from './keycloak.json' assert { type: 'json' }


const app = express();
const port = 3000;
//const  keycloak_config =require('./keycloak.json');
// Middleware configuration loaded from keycloak.json file.
//const keycloak = new Keycloak({});
const keycloak = new Keycloak(keycloak_config);

app.use(keycloak.middleware());

app.get('/public', (req, res) => {
  res.json({message: 'public'});
});

app.get('/secured', keycloak.protect('realm:user'), (req, res) => {
  res.json({message: 'secured'});
});

app.get('/admin', keycloak.protect('realm:admin'), (req, res) => {
  res.json({message: 'admin'});
});

app.use('*', (req, res) => {
  res.send('Not found!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
