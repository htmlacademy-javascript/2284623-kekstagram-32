import {MESSAGES, NAMES, DESCRIPTIONS, DESCRIPTION_COUNT, LIKE_MIN, LIKE_MAX, COMMENTS_MAX, AVATAR_ID_MAX} from './data.js';
import {getRandomArrayElement, getRandomIdGenerator, getRandomPositiveInteger, getRandomTextComments, makeConsecutiveNumbersGenerator} from './generate.js';

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

export {createDescriptionsFoto};
