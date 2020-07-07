import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormComponent } from './form/form.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
