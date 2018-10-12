import * as fromRoot from '../../../state/app.state';
import * as fromSelectedUser from '../state/reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State extends fromRoot.State {

  selectedUser: fromSelectedUser.SelectedUserState;
}

const getSelectedUserFeatureState = createFeatureSelector<fromSelectedUser.SelectedUserState>('selectedUser');

export const getUser = createSelector(
  getSelectedUserFeatureState,
  state => state.user
);

export const getError = createSelector(
  getSelectedUserFeatureState,
  state => state.error
);