import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import RepoListItem from 'containers/RepoListItem';

function PostList({ posts }) {
  // if (loading) {
  //   return <List component={LoadingIndicator} />;
  // }

  // if (error !== false) {
  //   const ErrorComponent = () => (
  //     <ListItem item="Something went wrong, please try again!" />
  //   );
  //   return <List component={ErrorComponent} />;
  // }

  if (posts !== false) {
    return <List items={posts} component={PostListItem} />;
  }

  return null;
}

PostList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  post: PropTypes.any,
};

export default PostList;
