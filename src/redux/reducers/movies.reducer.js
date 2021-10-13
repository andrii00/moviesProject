import { MOVIES_SUCCESS, MOVIES_FAIL, MOVIES_REQUEST } from "../action-types";

const initialState = {
    movies: [],

    loading: false,
};

export default function movies(state = initialState, action) {
    switch (action.type) {
        case MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            };

        case MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };

        case MOVIES_FAIL:
            return {
                ...state,
                movies: [],
                loading: false
            };

        default:
            return state;
    }
};