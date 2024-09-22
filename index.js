const qr = require("qrcode")

// The data you want to encode in the QR code
const url = 'https://civil-balurghat-live-5r83.vercel.app/';

// Generate a QR code and save it as an image file
QRCode.toFile('qrcode.png', url, function (err) {
    if (err) throw err;
    console.log('QR code generated and saved as qrcode.png');
});