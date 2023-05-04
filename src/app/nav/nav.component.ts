import { Component} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ModalService} from "../services/modal.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public modalService: ModalService, public authService: AuthService, private afAuth: AngularFireAuth) {

  }

  openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }


  async logout($event: Event) {
    $event.preventDefault();
    await this.afAuth.signOut();
  }
}
