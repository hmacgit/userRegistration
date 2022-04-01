import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';

const routes: Routes = [

  {
    path: 'login',
    component: UserRegistrationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
