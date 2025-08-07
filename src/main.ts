// import { bootstrapApplication } from '@angular/platform-browser';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { registerLocaleData } from '@angular/common';
import localesEs from '@angular/common/locales/es';

registerLocaleData(localesEs, 'es');

platformBrowserDynamic().bootstrapModule(AppModule); // bootstrapmodule se le conoce como el modulo raíz.