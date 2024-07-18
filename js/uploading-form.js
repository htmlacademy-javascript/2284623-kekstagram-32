const uploadingImgForm = document.querySelector('.img-upload__form');
const uploadControl = uploadingImgForm.querySelector('.img-upload__input');
const imgUploadOverlay = uploadingImgForm.querySelector('.img-upload__overlay');
const imgUploadButtonCancel = uploadingImgForm.querySelector('.img-upload__cancel');
const userImgComment = uploadingImgForm.querySelector('.text__description');
const userImgHashtags = uploadingImgForm.querySelector('.text__hashtags');
const hashtagValid = /^#[a-zа-яё0-9]{1,19}$/i;

const onOverlayKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadingModal();
  }
};

const onUploadButtonCancel = () => {
  closeUploadingModal();
};

function openUploadingModal () {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener ('keydown', onOverlayKeydown);
  imgUploadButtonCancel.addEventListener ('click', onUploadButtonCancel);
  uploadControl.removeEventListener('change', openUploadingModal);
  userImgComment.addEventListener('focus', onCommentFocus);
  userImgHashtags.addEventListener('focus', onHashtagFocus);
}

function closeUploadingModal () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener ('keydown', onOverlayKeydown);
  imgUploadButtonCancel.removeEventListener ('click', onUploadButtonCancel);
  userImgComment.removeEventListener('focus', onCommentFocus);
  userImgComment.removeEventListener('blur', onCommentBlur);
  userImgHashtags.removeEventListener('focus', onHashtagFocus);
  userImgHashtags.removeEventListener('blur', onHashtagBlur);
  uploadControl.addEventListener('change', openUploadingModal);
  uploadControl.value = '';
  userImgComment.value = '';
  userImgHashtags.value = '';
}

uploadControl.addEventListener('change', openUploadingModal);

function onCommentFocus () {
  document.removeEventListener ('keydown', onOverlayKeydown);
  userImgComment.addEventListener('blur', onCommentBlur);
  userImgComment.removeEventListener('focus', onCommentFocus);
}

function onCommentBlur () {
  document.addEventListener ('keydown', onOverlayKeydown);
  userImgComment.addEventListener('focus', onCommentFocus);
  userImgComment.removeEventListener('blur', onCommentBlur);
}

function onHashtagFocus () {
  document.removeEventListener ('keydown', onOverlayKeydown);
  userImgHashtags.addEventListener('blur', onCommentBlur);
  userImgHashtags.removeEventListener('focus', onCommentFocus);
}

function onHashtagBlur () {
  document.addEventListener ('keydown', onOverlayKeydown);
  userImgHashtags.addEventListener('focus', onCommentFocus);
  userImgHashtags.removeEventListener('blur', onCommentBlur);
}

const pristine = new Pristine(uploadingImgForm);
const validateComment = (value) => value.length < 10;
const validateHashtag = (value) => {
  const hashtagsArray = value.trim().toLowerCase().split(' ');
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

