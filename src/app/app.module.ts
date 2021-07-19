import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {SignupComponent} from "./auth/signup/signup.component";
import {LoginComponent} from './auth/login/login.component';
import {CurrentTrainingComponent} from './training/current-training/current-training.component';
import {NewTrainingComponent} from './training/new-training/new-training.component';
import {PastTrainingComponent} from './training/past-training/past-training.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TrainingComponent} from './training/training/training.component';
import {AppRoutingModule} from "./app-routing.module";
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        CurrentTrainingComponent,
        NewTrainingComponent,
        PastTrainingComponent,
        WelcomeComponent,
        TrainingComponent,
        HeaderComponent,
        SidenavListComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}