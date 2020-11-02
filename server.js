const express = require('express');
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const API_SERVICE_URL = "https://agiles-backend-2020.herokuapp.com";

app.use(express.static(__dirname + '/dist/ahorcado'));
app.get('/front', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/ahorcado/index.html'));
});

/* PROXY */
app.use('/iniciar', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`/iniciar`]: '/iniciar',
    },
}));

app.use('/enviar-letra', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`/enviar-letra`]: '/enviar-letra',
    },
}));

app.use('/enviar-palabra', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`/enviar-palabra`]: '/enviar-palabra',
    },
}));

app.listen(process.env.PORT || 5000);