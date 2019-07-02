import "core-js/es7/reflect";
import { enableProdMode, NgZone } from "@angular/core";
import { APP_BASE_HREF } from "@angular/common";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import singleSpaAngular from "single-spa-angular";
import { singleSpaPropsSubject } from "./single-spa/single-spa-props";

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic([
      {
        provide: APP_BASE_HREF,
        /*
         * Accept base href from single-spa to use in routing.
         * Using `any` here because of a bug in `bootstrapFunction()`'s type definition.
         */

        useValue: (singleSpaProps as any).baseHref
      }
    ]).bootstrapModule(AppModule);
  },
  template: "<app-root></app-root>",
  Router,
  NgZone: NgZone,
  domElementGetter: () => document.getElementById("spa")
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
