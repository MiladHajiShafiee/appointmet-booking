import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import {getSellerSlotsReducer} from './redux/reducers/slot';

import {getSellersReducer, clientLoginReducer} from './redux/reducers/client';
import {createAppointmentReducer} from './redux/reducers/appointment';

const reducer = combineReducers({
  sellersList: getSellersReducer,
  clientLogin: clientLoginReducer,
  sellerSlotsList: getSellerSlotsReducer,
  appointment: createAppointmentReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware),
);

export default store;
