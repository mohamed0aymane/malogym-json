import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ActiviteComponent } from './activite/activite.component';
import { TeamComponent } from './team/team.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'package',component:PackageComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  
  {path:'connecter',component:ConnecterComponent},
  {path:'activite',component:ActiviteComponent},
  {path:'team',component:TeamComponent},

  {path:'register',component:CreateRegistrationComponent},
  {path:'list',component:RegistrationListComponent},
  {path:'listC',component:ContactListComponent},
  {path:'detail/:id',component:UserDetailComponent},
  {path:'update/:id',component:CreateRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
