import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ZeroComponent } from './zero/zero.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ZeroComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
