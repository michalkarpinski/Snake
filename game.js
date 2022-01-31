let lastRenderTime = 0;
const SNAKE_SPEED = 1;

function main(currentTime) {
  window.requestAnimationFrame(main);

  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < SNAKE_SPEED) return;

  lastRenderTime = currentTime;
  console.log(secondsSinceLastRender);

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {}

function draw() {}
