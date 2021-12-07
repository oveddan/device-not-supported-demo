import { Device } from 'mediasoup-client';

const deviceDebug = document.getElementsByTagName('h2')[0];
const browserDebug = document.getElementsByTagName('p')[0];

if (typeof navigator === 'object' && navigator.product === 'ReactNative')
{
  browserDebug.innerText = 'device: ReactNative';
} else {
  browserDebug.innerText = `user agent: ${navigator.userAgent}`;
}

// Create a device (use browser auto-detection).
try {
  new Device();

  deviceDebug.innerText = 'succeeeded loading device.';
  // deviceDebug.innerText = device.rtpCapabilities;
} catch(e) {
  deviceDebug.innerText = e.toString();
}