const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);

console.log("Starting compression...");
ffmpeg('public/videos/bagdogra-bike-rental.mp4')
  .outputOptions([
    '-c:v libx264',
    '-crf 28', // Higher CRF means more compression
    '-preset veryfast', // Speed over maximum compression efficiency
    '-vf scale=-2:720' // Scale to 720p
  ])
  .on('end', () => {
    console.log('Compression finished!');
  })
  .on('error', (err) => {
    console.error('Error:', err);
  })
  .save('public/videos/bagdogra-compressed.mp4');
