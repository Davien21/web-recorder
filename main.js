function listAudioSources() {
  console.log('Listing audio sources...');
  navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      devices.forEach(function(device) {
        console.log('Device ID:', device.deviceId);
        console.log('Device Label:', device.label);
        console.log('Device Kind:', device.kind);
        console.log('--------------------');
      });
    })
    .catch(function(error) {
      console.error('Error listing audio sources:', error);
    });
}

function recordAudio() {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
      var mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      console.log('Recording audio...');
      mediaRecorder.ondataavailable = function(e) {
        console.log('Audio available:', e.data);
      };
      mediaRecorder.onstop = function(e) {
        console.log('Recording stopped.');
      };
      setTimeout(function() {
        mediaRecorder.stop();
      }, 3000);
    })
    .catch(function(error) {
      console.error('Error recording audio:', error);
    });
}