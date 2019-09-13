import actionCreactor from "./actionCreator";
import * as actionTypes from "./actionTypes";

export const authStart = actionCreactor(actionTypes.AUTH_START);
export const logout = actionCreactor(actionTypes.LOGOUT);
export const authError = actionCreactor(actionTypes.AUTH_ERROR);
export const authSuccess = actionCreactor(
  actionTypes.AUTH_START,
  "userId",
  "token"
);
