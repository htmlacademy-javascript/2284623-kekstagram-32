import {partCommentsArray, commentsList, commentCount, commentsCount, commentsLoader, commentTemplate} from './open-full-pic.js';
import { ONETIME_ADDED_COMMENTS } from './data.js';
function addComments () {
  const addingComments = partCommentsArray.splice(0, ONETIME_ADDED_COMMENTS);
  addingComments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsList.appendChild(commentElement);
  });
  toggleCommentLoader();
  updateCommentCount();
}

function updateCommentCount () {
  commentCount.innerHTML = `${commentsList.querySelectorAll('.social__comment').length} из ${commentsCount.textContent} комментариев`;
}

function toggleCommentLoader () {
  commentsLoader.classList.toggle('hidden', partCommentsArray.length === 0);
}

export {addComments};
