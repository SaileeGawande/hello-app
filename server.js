const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('My docker Test Deploy automation'));

app.listen(3000, () => console.log('Running on port 3000'));
app.get('/health', (req, res) => res.json({status: 'ok'}));
app.get('/', (req, res) => res.send(process.env.APP_MESSAGE || 'Hello from Docker! TEST CONFIGMAP'));