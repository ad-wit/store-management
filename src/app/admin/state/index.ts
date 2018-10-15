import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromAdmin from './reducer';

export interface State extends fromRoot.State {

  admin: fromAdmin.AdminState;
}

const getAdminFeatureState = createFeatureSelector<fromAdmin.AdminState>('admin');

export const getAdmin = createSelector(
  getAdminFeatureState,
  state => state.admin
);

export const getRole = createSelector(
  getAdmin,
  admin => admin.role
);

export const getOnlineStatus = createSelector(
  getAdminFeatureState,
  state => state.online
);
