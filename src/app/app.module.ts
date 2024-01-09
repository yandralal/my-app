import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumpstartComponentsModule } from '@wk/components-angular15';
import { AccordionComponent } from './examples/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent
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
