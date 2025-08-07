import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, TasksModule], //la propiedad imports es para componentes de tipo standalone
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
})
export class AppModule {}
//Browser module solo de debe importar en el modulo raíz de la aplicacion, es decir solo una vez en toda la aplicación.
