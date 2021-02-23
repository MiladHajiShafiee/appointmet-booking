import * as types from '../types/slot';

export const slotsListReducer = (state = { slots: [] }, action) => {
    switch (action.type) {
        case types.SLOTS_LIST_REQUEST:
            return { loading: true, slots: [] };
        case types.SLOTS_LIST_SUCCESS:
            return { loading: false, slots: action.payload };
        case types.SLOTS_LIST_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};

export const slotDeletionReducer = (state = { deletedSlot: null }, action) => {
    switch (action.type) {
        case types.SLOT_DELETION_REQUEST:
            return { ...state, loading: true };
        case types.SLOT_DELETION_SUCCESS:
            return { loading: false, deletedSlot: action.payload };
        case types.SLOT_DELETION_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};

export const slotCreationReducer = (state = { createdSlot: null }, action) => {
    switch (action.type) {
        case types.SLOT_CREATION_REQUEST:
            return { ...state, loading: true };
        case types.SLOT_CREATION_SUCCESS:
            return { loading: false, createdSlot: action.payload };
        case types.SLOT_CREATION_FAIL:
            return { laoding: false, error: action.payload };
        default:
            return state;
    }
};
