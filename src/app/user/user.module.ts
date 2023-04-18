import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {  ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,

    ],
    exports: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
