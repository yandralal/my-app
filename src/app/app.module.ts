import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumpstartComponentsModule } from '@wk/components-angular15';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JumpstartComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
