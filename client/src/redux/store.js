import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import posts from './postsRedux';

// combine reducers
const rootReducer = combineReducers({
  posts
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk)));

export default store;