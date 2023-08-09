import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { IntroCompComponent } from './intro-comp/intro-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { FooterCompComponent } from './footer-comp/footer-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    IntroCompComponent,
    MainCompComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
