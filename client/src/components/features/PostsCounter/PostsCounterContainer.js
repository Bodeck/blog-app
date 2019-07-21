import { connect } from 'react-redux';
import PostsCounter from './PostsCounter';
import { getPostsCount } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  postsCount: getPostsCount(state)
});

export default connect(mapStateToProps)(PostsCounter);
