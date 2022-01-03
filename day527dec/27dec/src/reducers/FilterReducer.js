import * as actiontype from "../actions/ActionTypes"

export default function FilterReducer(state = {}, action) {
    {
        switch (action.type) {
            case actiontype.FILTER_CHANGE:
                return action.payload.filter;
            default:
                return state;
        }

    }

}