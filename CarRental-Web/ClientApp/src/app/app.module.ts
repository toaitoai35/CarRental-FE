import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentHomepageComponent } from './home/content-homepage/content-homepage.component';
import { FooterComponent } from './footer/footer.component';

import { RegisterComponent } from './account/register/register.component';
import { OverviewComponent } from './overview/overview.component';
import { CarComponent } from './car/car.component';
import { CarPage2Component } from './car/car-page2/car-page2.component';
import { CarPage3Component } from './car/car-page3/car-page3.component';
import { CarPage4Component } from './car/car-page4/car-page4.component';
import { ContactComponent } from './contact/contact.component';
import { BookingComponent } from './booking/booking.component';

import { CarDetailComponent } from './car-detail/car-detail.component';

import { LoginComponent } from './account/login/login.component';
import { EditCarComponent } from './admin/car/edit-car/edit-car.component';
import { AddCarComponent } from './admin/car/add-car/add-car.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { ListCarComponent } from './admin/car/list-car/list-car.component';




const appRoutes : Routes = [
  { path:'admin',
   component: DashboardAdminComponent,
  children: [
    { path:'car', 
    component: ListCarComponent}
  ]},
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path:'overview', component: OverviewComponent},
  { path:'car', 
  component: CarComponent,
  children: [
    { 
      path: 'id', 
      component: CarDetailComponent
    }
  ]
},
  { path:'car/car-page2', component: CarPage2Component},
    { path:'car/car-page3', component: CarPage3Component},
    { path:'car/car-page4', component: CarPage4Component},
    { path:'contact', component: ContactComponent},

    { path:'car-detail', component: CarDetailComponent},
    { path:'booking', component: BookingComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentHomepageComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    OverviewComponent,
    CarComponent,
    CarPage2Component,
    CarPage3Component,
    CarPage4Component,
    ContactComponent,
    BookingComponent,
    CarDetailComponent,
    EditCarComponent,
    AddCarComponent,
    DashboardAdminComponent,
    ListCarComponent,

 
  ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
