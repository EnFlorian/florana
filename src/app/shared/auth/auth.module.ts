import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffect } from './store/effects/login.effect';

@NgModule({
  declarations: [],
  imports: [CommonModule, EffectsModule.forFeature([LoginEffect])],
})
export class AuthModule {}
