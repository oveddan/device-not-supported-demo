import { Device } from 'mediasoup-client';

const deviceDebug = document.getElementsByTagName('h2')[0];

// Create a device (use browser auto-detection).
try {
new Device();

deviceDebug.innerText = 'succeeeded loading device.';
  // deviceDebug.innerText = device.rtpCapabilities;
} catch(e) {
  deviceDebug.innerText = e.toString();
}