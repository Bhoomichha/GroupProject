import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DestinationComponent } from './destination/destination.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';
import { CNTowerComponent } from './destination/CNTower.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'destination', component: DestinationComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cntower', component: CNTowerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route to 'home'
  { path: '**', redirectTo: '/home' }, // Redirect to 'home' for any other unknown routes
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }