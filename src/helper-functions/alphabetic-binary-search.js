export default (target, sortedStringArray) => {
  if (!target) return null;
  if (!sortedStringArray) return null;

  let l = 0;
  let r = sortedStringArray.length - 1;
  const tarASCII = target.toLowerCase()[0].charCodeAt(0);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    const midASCII = sortedStringArray[mid].toLowerCase().charCodeAt[0];

    if (midASCII === tarASCII) return sortedStringArray[mid];

    if (midASCII > tarASCII) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return null;
};
