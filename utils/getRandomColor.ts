const hueMax = 360;
const saturationMax = 50;
const lightnessMax = 50;

function getRandom(min: number, max: number): number {
  const rndInt = Math.floor(Math.random() * max) + min;
  return rndInt;
}

export function getRandomColor() {
  const hue = getRandom(0, hueMax);
  const saturation = getRandom(0, saturationMax);
  const lightness = getRandom(0, lightnessMax);

  const color = `hsla(${hue}, ${saturation}%, ${lightness}%, 1)`;

  return color;
}
