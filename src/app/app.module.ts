import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { RegisterComponent } from './register/register.component';
import {InputTextModule} from 'primeng/inputtext';
import { NgxCurrencyDirective } from 'ngx-currency';
import { RadioButtonModule } from 'primeng/radiobutton';
import { registerLocaleData, CommonModule  } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderTopComponent,
    FooterBottomComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabMenuModule,
    ButtonModule,
    CalendarModule,
    FormsModule,
    InputTextModule,
    NgxCurrencyDirective,
    RadioButtonModule,
    ReactiveFormsModule
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
