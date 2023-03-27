// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { Client } = require('whatsapp-web.js');

const client = new Client();

var qrimg = document.getElementbyid('QR');


client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    var qrcode = new QRCode("qrcode",qr);
    qrimger.src = qrcode;
    
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
