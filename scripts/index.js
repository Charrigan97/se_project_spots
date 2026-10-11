// Edit Profile Modal Elements
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

// New Post Modal Elements
const newPostModal = document.querySelector("#new-post-modal");
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Event Listeners for Opening Modals
editProfileBtn.addEventListener("click", () => {
  editProfileModal.classList.add("modal_is-opened");
});

newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});

// Event Listeners for Closing Modals
editProfileCloseBtn.addEventListener("click", () => {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", () => {
  newPostModal.classList.remove("modal_is-opened");
});