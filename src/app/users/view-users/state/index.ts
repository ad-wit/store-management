import * as fromRoot from '../../../state/app.state';
import * as fromUsersList from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State extends fromRoot.State {
  usersList: fromUsersList.UsersListState;
}

const getUsersListFeatureState = createFeatureSelector<fromUsersList.UsersListState>('usersList');

export const getUsers = createSelector(
  getUsersListFeatureState,
  state => state.users
);

export const getError = createSelector(
  getUsersListFeatureState,
  state => state.error
);