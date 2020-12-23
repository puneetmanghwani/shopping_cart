import { createStore } from 'redux';

import cartReducer from './reducer';
import { loadState,saveState } from '../Utils/reduxStateManagement';

// getting previous state from storage
const persistedState = loadState();

const store = createStore(
    cartReducer,
    persistedState
);

// subscribing store to listen to any state change then save the new state in storage
store.subscribe(()=>{
    saveState({
        cartItems : store.getState().cartItems
    });
});

export default store;