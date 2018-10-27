import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuardService } from './authentication/authenticationGuard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { RoadsComponent } from './works/roads/roads.component';
import { AccessComponent } from './works/access/access.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { PreviousRouteService } from './authentication/previousURL.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    RoadsComponent,
    AccessComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    PreviousRouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
