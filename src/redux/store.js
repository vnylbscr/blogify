import { createStore, compose } from 'redux';
import reducers from './reducers';

// Extension for Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, composeEnhancers);

export default store;
