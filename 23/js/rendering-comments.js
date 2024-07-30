import { Indefications } from './const.js';

const commentsList = document.querySelector('.social__comments');

const renderCommentsList = (comments) => {
  document.querySelector('.social__comments').textContent = '';
  comments.forEach((comment) => {
    const newCommentContainer = document.createElement('li');
    const userAvatar = document.createElement('img');
    newCommentContainer.className = 'social__comment';
    userAvatar.className = 'social__picture';
    userAvatar.src = comment.avatar;
    userAvatar.alt = comment.name;
    userAvatar.id = comment.id;
    userAvatar.width = Indefications.USER_AVATAR_WIDTH;
    userAvatar.height = Indefications.USER_AVATAR_HEIGTH;
    const textComment = document.createElement('p');
    textComment.className = 'social__text';
    textComment.textContent = comment.message;
    newCommentContainer.appendChild(userAvatar);
    newCommentContainer.appendChild(textComment);
    commentsList.appendChild(newCommentContainer);
  });
};

export { renderCommentsList };
