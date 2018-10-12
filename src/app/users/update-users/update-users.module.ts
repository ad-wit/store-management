import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './state/reducer';
import { Effects } from './state/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('selectedUser', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: []
})
export class UpdateUsersModule { }
