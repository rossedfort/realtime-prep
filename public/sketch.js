function setup() {
  whiteboard = createCanvas(windowWidth - 150, windowHeight - 200);
  whiteboard.parent('container')
  background(255);

  socket.on('mouse',
    function(data) {
      fill(0,0,255);
      noStroke();
      ellipse(data.x,data.y,10,10);
    }
  );
}

function draw() {
}

function mouseDragged() {
  fill(255, 0, 0);
  noStroke();
  ellipse(mouseX,mouseY,10,10);
  sendMouseData(mouseX,mouseY);
}
function sendMouseData(xpos, ypos) {

  var data = {
    x: xpos,
    y: ypos
  };

  socket.emit('mouse',data);
}
