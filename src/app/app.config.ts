import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors} from "@angular/common/http"
import { routes } from './app.routes';
import { authInterceptor, provideMCAuth } from '@mckit/auth';
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import Aura from "@primeuix/themes/aura"
import {providePrimeNG} from "primeng/config"
import {definePreset} from "@primeuix/themes"

/* const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        500: "{indigo.500}",
        600: "{indigo.600}",
        700: "{indigo.700}"
      }
    }
  })
*/

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideMCAuth({ baseUrl: "http://localhost:3000/api/" }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {prefix: "p", darkModeSelector: ".my-app-dark", cssLayer:false}
      }
    })
  ]
};
