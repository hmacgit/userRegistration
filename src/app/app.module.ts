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
import { ValidationBaseDirective } from './directives/validation-base.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserProfileComponent,
    ValidationBaseDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserRegistrationModule,
    BrowserAnimationsModule,
    NgxsStoreModule,
    MatButtonModule,
    MatFormFieldModule,
    AuthModule,
    HttpClientModule,
    ImageModule,
    NgxsFormPluginModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
