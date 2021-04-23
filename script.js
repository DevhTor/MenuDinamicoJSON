var qrData = document.getElementById('qr-data');
var qrCode = new QRCode(document.getElementById('qr-code'));

function generateQR()
{
    qrCode.makeCode(qrData.value);
}