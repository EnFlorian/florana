import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';

const routes: Routes = [{ path: 'auth', component: AuthPageComponent }];

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageHeaderModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthPageModule {}
