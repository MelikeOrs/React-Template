/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { WRITE_POSTS } from './constants';

// The initial state of the App
export const initialState = {
  posts: [],
};

// /* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log(action.type);
    switch (action.type) {
      case WRITE_POSTS:
        console.log("geldim")
        draft.posts = action.posts;
        break;
    }
  });

export default homeReducer;
// import { WRITE_POSTS } from './actions';

// export default (state = {}, { type, posts }) => {
//   switch (type) {
//     case WRITE_POSTS:
//       return posts;
//     default:
//       return state;
//   }
// };
