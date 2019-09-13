import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  token: null,
  userId: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return { ...state, loading: true };

    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.userId,
        token: action.token
      };

    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case actionTypes.LOGOUT:
      return { ...state, token: null, userId: null };

    default:
      return state;
  }
};

export default reducer;
