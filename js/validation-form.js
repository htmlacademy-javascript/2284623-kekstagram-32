import { userImgComment, userImgHashtags, uploadingImgForm } from './uploading-form.js';
const hashtagValid = /^#[a-zа-яё0-9]{1,19}$/i;
const pristine = new Pristine(uploadingImgForm);

const validateComment = (value) => value.length < 140;

const validateHashtag = (value) => {
  const hashtagsArray = value.trim().toLowerCase().split(' ');
  if (value === '') {
    return true;
  }
  if (hashtagsArray.length > 5) {
    return false;
  }
  if (hashtagsArray.every((hashtag) => hashtagsArray.filter((item) => hashtag === item).length > 1)) {
    return false;
  }
  if (hashtagsArray.every((hashtag) => hashtagValid.test(hashtag))) {
    return true;
  }
};

pristine.addValidator(
  userImgComment,
  validateComment,
  'Длина комментария не может составлять больше 140 символов'
);

pristine.addValidator(
  userImgHashtags,
  validateHashtag,
  'Не соответствует критериям'
);

uploadingImgForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadingImgForm.submit();
  }
});
