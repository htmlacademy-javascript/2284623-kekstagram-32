import { addComments } from './show-comments.js';
const otherPicContainer = document.querySelector('.pictures');
const fullPictureContainer = document.querySelector('.big-picture');
const fullSizePic = document.querySelector('.big-picture__img img');
const likeCount = document.querySelector('.likes-count');
const commentCount = fullPictureContainer.querySelector('.social__comment-count');
const commentsCount = commentCount.querySelector('.social__comment-total-count');
const fotoDescription = document.querySelector('.social__caption');
const fullPicCancel = fullPictureContainer.querySelector('.big-picture__cancel');
const commentsLoader = fullPictureContainer.querySelector('.comments-loader');
const commentsList = fullPictureContainer.querySelector('.social__comments');
const commentTemplate = commentsList.querySelector('.social__comment');
let partCommentsArray;
otherPicContainer.addEventListener('click', onPicClick);

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUserModal();
  }
};

const onFullPicCancel = () => {
  closeUserModal();
};

function openUserModal () {
  commentsLoader.addEventListener ('click', addComments);
  fullPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  fullPicCancel.addEventListener('click', onFullPicCancel);
  otherPicContainer.removeEventListener('click', onPicClick);
}

function closeUserModal () {
  fullPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  fullPicCancel.removeEventListener('click', onFullPicCancel);
  commentsLoader.removeEventListener ('click', addComments);
  otherPicContainer.addEventListener('click', onPicClick);
}

function onPicClick (evt) {
  if (evt.target.closest('.picture')) {
    const clickedPicture = evt.target.closest('.picture');
    fullSizePic.src = clickedPicture.querySelector('.picture__img').src;
    likeCount.textContent = clickedPicture.querySelector('.picture__likes').textContent;
    commentsCount.textContent = clickedPicture.querySelector('.picture__comments').textContent;
    fotoDescription.textContent = clickedPicture.querySelector('.picture__img').alt;
    commentsList.innerHTML = '';
    partCommentsArray = clickedPicture.comments.slice(0);
    addComments();
    openUserModal();
  }
}

export {partCommentsArray, commentsList, commentCount, commentsCount, commentsLoader, commentTemplate};
