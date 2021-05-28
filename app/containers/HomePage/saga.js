/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import { LOAD_POSTS } from './constants';
import { writePosts } from './actions';

/**
 * Github repos request/response handler
 */
export function* getPosts() {
  // Select username from store

  const requestURL = `https://jsonplaceholder.typicode.com/posts`;

  try {
    // Call our request helper (see 'utils/request')
    const posts = yield call(request, requestURL);
    console.log(posts);
    yield put(writePosts(posts));
  } catch (err) {
   
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_POSTS, getPosts);
}
