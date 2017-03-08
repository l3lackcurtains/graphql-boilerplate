import userMutation from './user';
import postMutation from './post';

export default {
  ...userMutation,
  ...postMutation
}
