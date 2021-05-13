import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JetfyListfyComponent } from './components/jetfy-listfy/jetfy-listfy.component';
import { JetfyCardfyComponent } from './components/jetfy-cardfy/jetfy-cardfy.component';
import { customTapGesture } from './directives/custom-tap-gesture.directive';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}

@NgModule({
  declarations: [
    AppComponent,
    JetfyListfyComponent,
    JetfyCardfyComponent,
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
