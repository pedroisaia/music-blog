import { Routes } from '@angular/router';
import { AboutPage } from './about-page/about-page';
import { CollectionPage } from './collection-page/collection-page';
import { FaqPage } from './faq-page/faq-page';
import { HomePage } from './home-page/home-page';
import { ReviewComponent } from './review/review';

export const routes: Routes = [
    { path: "", redirectTo: "home-page", pathMatch: "full" },
    {
        path: 'home-page',
        component: HomePage,
    },
    {
        path: 'collection-page',
        component: CollectionPage,
    },
    { 
        path: 'collection-page/:id', 
        component: ReviewComponent 
    },
    {
        path: 'music-page',
        component: AboutPage,
    },
    {
        path: 'tecnology-page',
        component: FaqPage,
    },
    {
        path: 'about-page',
        component: AboutPage,
    }
];