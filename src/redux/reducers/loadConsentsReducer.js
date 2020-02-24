import { GET_CONSENTS_ACTION_TYPES } from "../actions/loadConsentsActions";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CONSENTS_ACTION_TYPES.CONSENTS_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
        error: false,
        success: false
      };
    case GET_CONSENTS_ACTION_TYPES.CONSENTS_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: false,
        success: true
      };
    case GET_CONSENTS_ACTION_TYPES.CONSENTS_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
        success: false
      };
    case GET_CONSENTS_ACTION_TYPES.CONSENTS_FETCH_SERVER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        success: false
      };
    default:
      return state;
  }
};
