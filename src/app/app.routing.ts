import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';

const appRoutes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'events', component: EventComponent },
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });