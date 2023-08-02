import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DestinationComponent } from './destination/destination.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contacts',
        component: ContactsComponent
    },
    {
        path: 'destination',
        component: DestinationComponent
    },
    {
        path: 'review',
        component: ReviewComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, // Default route to 'home'
    {
        path: '**',
        redirectTo: '/home'
    }, // Redirect to 'home' for any other unknown routes
];
export default appRoutes;