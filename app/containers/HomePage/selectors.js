/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    homeState => homeState.user,

  );
const makeSelectPosts = () =>
  createSelector(
    selectHome,
    homeState => homeState.posts,

   
  );

export { selectHome, makeSelectUsername ,makeSelectPosts};
