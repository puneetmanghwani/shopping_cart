import { createStore } from 'redux';

import cartReducer from './reducer';
import { loadState,saveState } from '../Utils/reduxStateManagement';

const persistedState = loadState();

const store = createStore(
    cartReducer,
    persistedState
);

store.subscribe(()=>{
    saveState({
        cartItems : store.getState().cartItems
    });
});

export default store;