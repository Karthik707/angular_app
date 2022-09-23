import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { FashiondealsComponent } from './fashion/fashiondeals/fashiondeals.component';
import { ContactComponent } from './contact/contact.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'features',component:FeaturesComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},
  {path: 'fashiondeals',component:FashiondealsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'productdetail',component:ProductdetailsComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'login',component:LoginComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
