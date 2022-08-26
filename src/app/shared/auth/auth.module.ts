import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';
import { LogoutEffect } from './store/effects/logout.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([LoginEffect, LogoutEffect]),
  ],
})
export class AuthModule {}
