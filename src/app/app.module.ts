import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { RoadsComponent } from './works/roads/roads.component';
import { AccessComponent } from './works/access/access.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    AboutComponent,
    RoadsComponent,
    AccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
