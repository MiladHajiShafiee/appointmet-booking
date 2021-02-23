import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import { sellerLoginReducer } from './redux/reducers/seller';
import {
    slotsListReducer,
    slotDeletionReducer,
    slotCreationReducer,
} from './redux/reducers/slot';
import {
    listAppointmentReducer,
    appointmentDecisioinReducer,
} from './redux/reducers/appointment';

const reducer = combineReducers({
    slotsList: slotsListReducer,
    sellerLogin: sellerLoginReducer,
    deletedSlot: slotDeletionReducer,
    createdSlot: slotCreationReducer,
    appointmentsList: listAppointmentReducer,
    decidedAppointment: appointmentDecisioinReducer,
});

const sellerInfoFromStorage = localStorage.getItem('sellerInfo')
    ? JSON.parse(localStorage.getItem('sellerInfo'))
    : null;

const initialState = {
    sellerLogin: { sellerInfo: sellerInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
