import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        AuthComponent,

    ],
    exports: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class UserModule { }
