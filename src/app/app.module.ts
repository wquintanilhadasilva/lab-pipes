import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { SettingsService } from './settings.service';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    /*
     * {
        provide:LOCALE_ID,
        useValue: 'pt-BR'
      },
     */
    /*
      //Sintaxe possível para esta seção
      {
        provide:LOCALE_ID,
        useValue: 'pt-BR' //use este OU
        useFactory:       //use este OU
        useClass:         //use este
      }
    */
    //Agora de outra forma, obtendo o locale de um serviço de configuração e não hardcoded
    SettingsService,
    {
      provide:LOCALE_ID,
      deps:[SettingsService],
      useFactory: (service:SettingsService) => service.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
