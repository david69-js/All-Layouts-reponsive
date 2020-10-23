import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/bodyparts/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MainbodyComponent } from './components/mainbody/mainbody.component';
import { Body2Component } from './components/bodyparts/body2/body2.component';
import { Body3Component } from './components/bodyparts/body3/body3.component';
import { Body6Component } from './components/bodyparts/body6/body6.component';
import { Body4Component } from './components/bodyparts/body4/body4.component';
import { Body5Component } from './components/bodyparts/body5/body5.component';
import { Body7Component } from './components/bodyparts/body7/body7.component';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    MainbodyComponent,
    Body2Component,
    Body3Component,
    Body6Component,
    Body4Component,
    Body5Component,
    Body7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
