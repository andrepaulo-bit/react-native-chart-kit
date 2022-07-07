export function mapValue(
  x: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function roundNumber(number: number, decimals: number) {
  return +(Math.round(parseFloat(number + 'e+' + decimals)) + 'e-' + decimals)
}