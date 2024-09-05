export function numberWithCommas(n) {
  const num = Number(parseFloat(n).toFixed(2)).toLocaleString('en', {
    minimumFractionDigits: 2
  });

  return num;
}

export function numberWithCommas2(n) {
  const val = Math.round(Number(n) * 100) / 100;

  const parts = val.toString().split('.');

  const num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');

  return num;
}