// utils/getResult.js
export function getResultByDistance(scores, results) {
  const { sweet, texture } = scores;

  let closest = null;
  let minDistance = Infinity;

  results.forEach((r) => {
    const distance = Math.sqrt(
      Math.pow(sweet - r.sweet, 2) +
      Math.pow(texture - r.texture, 2)
    );

    if (distance < minDistance) {
      minDistance = distance;
      closest = r;
    }
  });

  return closest;
}
