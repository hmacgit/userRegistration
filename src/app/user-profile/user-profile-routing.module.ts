import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile.component";
import {AuthGuard} from "../auth.guard";
import {UserProfileResolveService} from "./user-profile-resolve.service";

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent,
    resolve: [UserProfileResolveService],
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
