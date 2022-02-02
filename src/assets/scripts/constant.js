const initialTweetFormState = {
  tweet: '',
  username: undefined,
  uid: undefined,
  photo: undefined,
  color: undefined,
  length: 0,
  date: undefined,
  likes:0,
  userLikes: []
}

const initialTweetToDelete = {
  id: undefined,
  uid: undefined
}

export { initialTweetFormState, initialTweetToDelete};