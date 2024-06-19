import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'not-found', component: NotFoundComponent},
    { path: 'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'about', component: AboutComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'gallery', component: GalleryComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'clients', component: ClientsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'pricing', component: PricingComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: 'testimonials', component: TestimonialsComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];
