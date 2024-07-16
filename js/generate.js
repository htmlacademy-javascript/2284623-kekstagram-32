const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const makeConsecutiveNumbersGenerator = (start) => {
  let currentNumber = start;
  return () => currentNumber++;
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getRandomTextComments = (elements) => {
  const textCount = getRandomPositiveInteger(1, 2);
  if (textCount === 1) {
    return getRandomArrayElement(elements);
  }
  const commentText = `${getRandomArrayElement(elements)} ${getRandomArrayElement(elements)}`;
  return commentText;
};

const getRandomIdGenerator = (min, max) => {
  const allValues = [];
  for (let i = min; i <= max; i++) {
    allValues.push(i);
  }

  return function () {
    if (allValues.length === 0) {
      return null;
    }
    const currentIndex = getRandomPositiveInteger(0, allValues.length - 1);
    const currentValue = allValues[currentIndex];
    allValues.splice(currentIndex, 1);
    return currentValue;
  };
};

export {getRandomArrayElement, getRandomIdGenerator, getRandomPositiveInteger, getRandomTextComments, makeConsecutiveNumbersGenerator};
