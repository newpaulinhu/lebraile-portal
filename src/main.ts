import  'polyfills.js';

import './vendor/pace/pace.min.js';
import '../node_modules/hammerjs/hammer.js';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from 'app/app.module.js';
import { environment } from 'environments/environment.js';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
