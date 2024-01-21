export function genUserId(): number {
  const min = Math.pow(10, 7); // 10^14
  const max = Math.pow(10, 8) - 1; // 10^15 - 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}