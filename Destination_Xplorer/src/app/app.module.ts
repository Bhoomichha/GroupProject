import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button'; // Import the MatButtonModule

import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';
import { DestinationComponent } from './destination/destination.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { CNTowerComponent } from './destination/CNTower.component';
import { RoyalOntarioComponent } from './destination/RoyalOntario.component';
import { RipleysAquariumComponent } from './destination/RipleysAquarium.component';
import { DistilleryHistoricDistrictComponent } from './destination/DistilleryHistoricDistrict.component';
import appRoutes from './routerconfig';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    SignupComponent,
    DestinationComponent,
    ContactsComponent,
    LoginComponent,
    CNTowerComponent,
    RoyalOntarioComponent,
    RipleysAquariumComponent,
    DistilleryHistoricDistrictComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule, // Add the MatButtonModule here
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }