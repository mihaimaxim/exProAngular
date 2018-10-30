import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthenticationService } from './authentication/services/authentication.service';
import { AuthenticationGuardService } from './authentication/services/authenticationGuard.service';
import { PreviousRouteService } from './authentication/services/previousURL.service';
import { RoadService } from './works/RoadService';
import { AccessService } from './works/access.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { RoadsComponent } from './works/roads/roads.component';
import { AccessComponent } from './works/access/access.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { RoadItemComponent } from './works/roads/road-item/road-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    RoadsComponent,
    AccessComponent,
    RegisterComponent,
    LoginComponent,
    RoadItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    PreviousRouteService,
    RoadService,
    AccessService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
