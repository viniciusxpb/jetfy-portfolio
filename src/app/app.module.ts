import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JetfyListfyComponent } from './components/jetfy-listfy/jetfy-listfy.component';
import { JetfyCardfyComponent } from './components/jetfy-cardfy/jetfy-cardfy.component';
import { JetfyListfy2Component } from './components/jetfy-listfy2/jetfy-listfy2.component';
import { customTapGesture } from './directives/custom-tap-gesture.directive';

@NgModule({
  declarations: [
    AppComponent,
    JetfyListfyComponent,
    JetfyCardfyComponent,
    JetfyListfy2Component,
    customTapGesture
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
