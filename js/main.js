const DESCRIPTION_COUNT = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENTS_MAX = 30;
const AVATAR_ID_MAX = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иван',
  'Артем',
  'Андрей',
  'Георгий',
  'Василий'
];

const DESCRIPTIONS = [
  'Центр города',
  'Окраина',
  'Парк',
  'Каньон',
  'Деревня',
  'Площадка'
];

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
    if (!allValues) {
      return null;
    }
    const currentValue = getRandomArrayElement(allValues);
    const currentIndex = allValues.indexOf(currentValue);
    allValues.splice(currentIndex, 1);
    return currentValue;
  };
};

const generateUrlId = getRandomIdGenerator(1, DESCRIPTION_COUNT);
const createCommentId = makeConsecutiveNumbersGenerator(1);
const createFotoId = makeConsecutiveNumbersGenerator(1);

const createComment = () => ({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomPositiveInteger(1, AVATAR_ID_MAX)}.svg`,
  message: getRandomTextComments(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => Array.from({length: getRandomPositiveInteger(0, COMMENTS_MAX)}, createComment);

const createDescriptionFoto = () => ({
  id: createFotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(LIKE_MIN, LIKE_MAX),
  comments: createComments()
});
const createDescriptionsFoto = () => Array.from({length: DESCRIPTION_COUNT}, createDescriptionFoto);

createDescriptionsFoto();
