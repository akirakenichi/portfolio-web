var n = 150;
var frames = [];

frames.push({transform: 'none'})
var frameCount = 3 + Math.random() * 8;
var translate = 0;
var rotate = 0;
var rotateY = 0;
var scale = 1;
var z = 0;
for (var i = 0; i < frameCount; i++) {
  z += (0.5 - Math.random()) * 100;
  scale += (0.5 - Math.random()) * 2;
  rotate += (0.5 - Math.random()) * 1080;
  rotateY += (0.5 - Math.random()) * 1080;
  translate += (0.5 - Math.random()) * 500;
  frames.push({
    transform: 'rotate(' + rotate + 'deg) rotateY(' + rotateY + 'deg) translateX(' + translate + 'px) scale(' + scale + ') translateZ(' + z + 'px)',
  });
}
frames.push({transform: 'none'})

var duration = frames.length * 5000;

for (var i = 0; i < n; i++) {
  var ball = document.createElement('ball');
  var color = 'rgb(' + Math.round((i / n) * 256) + ', 128, 200)';
  ball.style.background = color;
  document.body.appendChild(ball);
  ball.classList.add('ball');
  ball.animate(frames, {
    duration: duration,
    iterations: Infinity,
    delay: i / n * -duration,
  });
}
