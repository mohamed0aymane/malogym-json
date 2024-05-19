import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateRegistrationComponent } from './create-registration/create-registration.component';
import { RegistrationListComponent } from './registration-list/registration-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { PackageComponent } from './package/package.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { AboutComponent } from './about/about.component';
import { ActiviteComponent } from './activite/activite.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRegistrationComponent,
    RegistrationListComponent,
    UserDetailComponent,
    NavbarComponent,
    TeamComponent,
    PackageComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ConnecterComponent,
    AboutComponent,
    ActiviteComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,

    NgToastModule,
    NgConfirmModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
