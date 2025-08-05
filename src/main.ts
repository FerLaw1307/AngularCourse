// import { bootstrapApplication } from '@angular/platform-browser';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

// import { AppComponent } from './app/app.component';
// import { registerLocaleData } from '@angular/common';
// import localesEs from '@angular/common/locales/es';
// import { LOCALE_ID } from '@angular/core';

// registerLocaleData(localesEs, 'es');

// bootstrapApplication(AppComponent, {
//     providers:[
//         {provide:LOCALE_ID, useValue: 'es'},
//     ],
// }).catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule);