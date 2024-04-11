import { combineReducers, createStore } from 'redux';
import coursesReducer from './reducers/TaskReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
});

const ConfigureStore = () => {
  return createStore(rootReducer);
};

export default ConfigureStore;

