import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JetfyListfyComponent } from './components/jetfy-listfy/jetfy-listfy.component';

@NgModule({
  declarations: [
    AppComponent,
    JetfyListfyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
