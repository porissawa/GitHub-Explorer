export const formatDate = date =>
  date
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

export const formatNumber = n => {
  const str = String(n);
  const lng = str.split('').length;
  if (lng >= 7) {
    return str.slice(0, -6).concat('M');
  }
  if (lng >= 4) {
    return str.slice(0, -3).concat('K');
  }
  return str;
};
