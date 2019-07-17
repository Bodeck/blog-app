import { createStore, combineReducers } from 'redux';
// import reducers
import posts from './postsRedux';

// combine reducers
const rootReducer = combineReducers({
  posts
});

const store = createStore(rootReducer);

export default store;