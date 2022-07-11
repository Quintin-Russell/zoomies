export default (name) => {
  const seperateWord = {
    bullterrier: 'Bull Terrier',
    cattledog: 'Cattle Dog',
    cotondetulear: 'Conton de Tulear',
    germanshepherd: 'German Shepherd',
    mexicanhairless: 'Mexican Hairless',
    stbernard: 'St. Bernard'
  };
  if (name in seperateWord) return seperateWord[name];
  const returnValue = name.split('');
  const newFirstLetter = returnValue[0].toUpperCase();
  returnValue[0] = newFirstLetter;
  return returnValue.join('');
};
