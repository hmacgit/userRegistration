import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UserRegistrationModule} from './user-registration/user-registration.module';
import {MatButtonModule} from '@angular/material/button';
import {NgxsStoreModule} from '../store/store.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthModule} from '../store/auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {ImageModule} from 'primeng/image';
import {NgxsFormPluginModule} from '@ngxs/form-plugin';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserRegistrationModule,
    NgxsStoreModule,
    MatButtonModule,
    MatFormFieldModule,
    AuthModule,
    HttpClientModule,
    ImageModule,
    NgxsFormPluginModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
