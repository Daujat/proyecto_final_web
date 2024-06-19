import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "laboratorio-12-web-djvp",
        appId: "1:294198704679:web:9cdbebeee0b53ca9ca2c02",
        storageBucket: "laboratorio-12-web-djvp.appspot.com",
        apiKey: "AIzaSyBlGWwxrHFQZxZJU2RJ9aBrnKhkpze2nJc",
        authDomain: "laboratorio-12-web-djvp.firebaseapp.com",
        messagingSenderId: "294198704679"
      })
    ),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ]
};
