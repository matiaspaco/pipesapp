import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { AdministrationModule } from './Administration/administration.module';
import localeEspanish from '@angular/common/locales/es-BR';
import localeFrench from '@angular/common/locales/fr';
import{registerLocaleData} from '@angular/common';
registerLocaleData(localeEspanish);
registerLocaleData(localeFrench);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    PrimeNgModule,
    SharedModule,
    AdministrationModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
