/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { loadPosts } from './actions';
import { makeSelectUsername, makeSelectPosts } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  user,
  loading,
  error,
  repos,
  loadPosts,
  posts,

}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  
  useEffect(() => {
    loadPosts;
  }, []);


  const reposListProps = {
    loading,
    error,
    repos,
  };
  console.log(posts)
return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <CenteredSection>
          <H2>
            <FormattedMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredSection>
        <Section>
          <H2>
            <FormattedMessage {...messages.trymeHeader} />
          </H2>
        </Section>
        {posts.map((post, index) => {
          
          return (
            <a key={index}>
              {post.title}
            </a>
          );
        })}
      </div>
    </article>
  );
}



HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  user: PropTypes.string,
  onChangeUsername: PropTypes.func,
  loadPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  user: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  posts: makeSelectPosts(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
    loadPosts: dispatch(loadPosts()),
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);

// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { loadPosts } from './actions';

// class Home extends React.Component {
//   componentDidMount() {
//     this.props.loadPosts();
//   }

//   post = (x, i) => (
//     <div key={x.id.value}>
//       <h1>{x.title}</h1>
      
//     </div>
//   );

//   render() {
    
//     return 
//   }
// }

// const mapStateToProps = state => ({ posts: state.posts });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ loadPosts }, dispatch);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Home);
