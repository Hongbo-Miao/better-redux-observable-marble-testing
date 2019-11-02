import { Reducer } from 'redux';
import {
  GithubUsersState,
  FetchGithubUsersActionTypes,
  FETCH_USERS_REQUESTED,
  FETCH_USERS_FAILED,
  FETCH_USERS_SUCCESSFUL,
} from './types';

const initialState: GithubUsersState = {
  isLoading: false,
  error: null,
  data: null,
};

export const githubUsersReducer: Reducer<
  GithubUsersState,
  FetchGithubUsersActionTypes
> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_USERS_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    case FETCH_USERS_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    }
  }

  return state;
};