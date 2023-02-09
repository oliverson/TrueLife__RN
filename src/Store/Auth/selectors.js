import { createSelector } from "reselect";

export const auth = (state) => state.auth;

export const userDataSelector = createSelector(
  auth,
  (data) => data?.profileData || null
);
export const signUpSuccessSelector = createSelector(auth, (data) => {
  return data?.signUpSuccess;
});
