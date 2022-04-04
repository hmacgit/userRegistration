import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserProfileResolveService} from './user-profile/user-profile-resolve.service';

const routes: Routes = [

  {
    path: 'login',
    component: UserRegistrationComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    resolve: [UserProfileResolveService],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
