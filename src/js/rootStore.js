import { createStore } from 'redux';
import rootReducer from './rootReducer';

const rootStore = createStore(
    rootReducer);

export default rootStore;